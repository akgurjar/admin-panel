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
import { MESSAGES } from '@constants/index';
import { env } from '@env';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private $popup: PopupService) {}
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

    const setHeaders: Record<string, string> = {};
    if (!req.headers.get('Authorization')) {
      setHeaders['Authorization'] = `Basic ${window.btoa('RCC_USR:RCC_PWD')}`;
    }
    return next
      .handle(
        req.clone({
          setHeaders,
          url: this.formatUrl(req.url), // add base url
        })
      )
      .pipe(
        tap({
          next: (event) => {
            if (event instanceof HttpResponse) {
              // console.log('response');
            }
            // return throwError(error);
          },
          error: (event) => {
            if (event instanceof HttpErrorResponse) {
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
  formatUrl(url: string) {
    if (url.startsWith('$auth/')) {
      return url.replace(/^\$auth\//, env.apiBaseUrl.authService);
    } else if (url.startsWith('$user/')) {
      return url.replace(/^\$user\//, env.apiBaseUrl.userService);
    }
    return url;
  }
}
