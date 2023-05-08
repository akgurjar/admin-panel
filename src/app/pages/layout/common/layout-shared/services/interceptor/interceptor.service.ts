import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { EMPTY, Observable, catchError, from, switchMap } from 'rxjs';

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
    return next.handle(this.clone(req)).pipe(
      catchError((err, caught) => {
        console.info(err);
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 && this.$token.hasValue) {
            try {
              return from(this.$token.refresh()).pipe(
                switchMap(() => next.handle(this.clone(req)))
              );
            } catch (err1) {
              if (err1 instanceof HttpErrorResponse) {
                if (err1.status === 401) {
                  this.$profile.clear();
                }
              }
              return caught;
            }
          }
        }
        return caught;
      })
    );
  }
  clone(req: HttpRequest<any>) {
    return req.clone({
      setHeaders: {
        Authorization: this.$token.header('accessToken'),
      },
    });
  }
}
