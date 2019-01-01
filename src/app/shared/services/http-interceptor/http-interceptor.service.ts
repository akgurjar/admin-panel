import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PopupService } from '@popup';
import { Token } from '@token';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(
    private _popup: PopupService,
    private _token: Token
  ) {}
  // intercept all http requests
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          // console.log('response');
        }
        // return throwError(error);
      }, event => {
        if (event instanceof HttpErrorResponse) {
          // console.log('Session expired');
          if (event.status === 401) {
            if (this._token.hasValue) {
              this._token.reset();
              this._popup.open('Token is expired, please login again.', 'ERROR', {duration: 3000});
            }
          }
        }
      })
    );
  }
}
