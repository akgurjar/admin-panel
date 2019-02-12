import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PopupService } from '@popup';
import { Token } from '@token';
import { LoaderService } from '@loader';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(
    private _loader: LoaderService,
    private _popup: PopupService,
    private _token: Token
  ) {}
  // intercept all http requests
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //check internet connectivity
    if (navigator.onLine) {
      this._popup.open("You are offline, please connect to internet and retry.", "ERROR", {duration: 4000});
      return EMPTY;
    }
    this._loader.markAsLoading();
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this._loader.completeLoading();
          // console.log('response');
        }
        // return throwError(error);
      }, event => {
        if (event instanceof HttpErrorResponse) {
          this._loader.completeLoading();
          // console.log('Session expired');
          if (event.status === 401 && this._token.hasValue) {
            this._token.reset();
            this._popup.open('Token is expired, please login again.', 'ERROR', {duration: 3000});
          }
        }
      })
    );
  }
}
