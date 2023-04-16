import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PopupService } from '@popup';
import { LoaderService } from '@loader';
import { env } from '@env';
import { Token } from '@token';
import { MESSAGES, PUBLIC_ROUTE } from 'src/app/constants';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(
    private $loader: LoaderService,
    private $popup: PopupService,
    private $token: Token,
    private $router: Router
  ) {}
  // intercept all http requests
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // check internet connectivity
    if (!navigator.onLine) {
      this.$popup.error(MESSAGES.OFFLINE, { duration: 4000 });
      return EMPTY;
    }
    this.$loader.markAsLoading();
    const isApiUrl = req.url.charAt(0) === '~';
    return next
      .handle(
        req.clone({
          url: isApiUrl ? `${env.apiBaseUrl}${req.url.substr(1)}` : req.url, // add base url
        })
      )
      .pipe(
        tap(
          (event) => {
            if (event instanceof HttpResponse) {
              this.$loader.completeLoading();
              // console.log('response');
            }
            // return throwError(error);
          },
          (event) => {
            if (event instanceof HttpErrorResponse) {
              this.$loader.completeLoading();
              if (event.status === 401 && this.$token.hasValue) {
                this.$token.clear();
                this.$router.navigateByUrl(PUBLIC_ROUTE.url);
                this.$popup.error(MESSAGES.ERROR.$401);
              } else if (event.status === 504) {
                this.$popup.error(MESSAGES.ERROR.$504);
              } else {
                this.$popup.error(event.error.message);
              }
            }
          }
        )
      );
  }
}
