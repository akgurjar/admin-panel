import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { EMPTY, Observable, tap } from 'rxjs';

import { TokenService } from '@token';
import { PopupService } from '@popup';
import { ProfileService } from '@profile';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(
    private $token: TokenService,
    private $popup: PopupService,
    private $profile: ProfileService
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!this.$token.hasValue) {
      this.$popup.error('Your session is expired, Please login again.');
      this.$profile.clear();
      return EMPTY;
    }
    return next
      .handle(
        req.clone({
          setHeaders: {
            Authorization: this.$token.header('accessToken'),
          },
        })
      )
      .pipe(
        tap({
          next: (event) => {
            if (event instanceof HttpResponse) {
              //
            }
          },
          error: (event) => {
            if (event instanceof HttpErrorResponse) {
              //
            }
          },
        })
      );
  }
}
