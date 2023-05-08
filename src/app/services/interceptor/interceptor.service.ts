import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, EMPTY, tap } from 'rxjs';
import { PopupService } from '@popup';
import { LoaderService } from '@loader';
import { MESSAGES } from '@constants/index';
import { env } from '@env';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private $loader: LoaderService, private $popup: PopupService) {}
  // intercept all http requests
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // check internet connectivity
    // if (!navigator.onLine) {
    //   this.$popup.error(MESSAGES.OFFLINE, { duration: 4000 });
    //   return EMPTY;
    // }
    this.$loader.markAsLoading();
    const isApiUrl = req.url.startsWith('~');
    const setHeaders: Record<string, string> = {};
    if (!req.headers.get('Authorization')) {
      setHeaders['Authorization'] = `Basic ${window.btoa('RCC_USR:RCC_PWD')}`;
    }
    return next
      .handle(
        req.clone({
          setHeaders,
          url: isApiUrl ? `${env.apiBaseUrl}${req.url.substring(1)}` : req.url, // add base url
        })
      )
      .pipe(
        tap({
          next: (event) => {
            if (event instanceof HttpResponse) {
              this.$loader.completeLoading();
              // console.log('response');
            }
            // return throwError(error);
          },
          error: (event) => {
            if (event instanceof HttpErrorResponse) {
              this.$loader.completeLoading();
              if (event.status === 504) {
                this.$popup.error(MESSAGES.ERROR.$504);
              } else if (event.status !== 401) {
                this.$popup.error(event.error.message);
              }
            }
          },
        })
      );
  }
}
