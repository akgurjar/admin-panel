import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PopupService } from '@popup';
import { Token } from '@token';
import { LoaderService } from '@loader';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(
    private _loader: LoaderService,
    private _popup: PopupService,
    private _token: Token,
    private _router: Router
  ) {}
  // intercept all http requests
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //
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
          if (event.status === 401 && this._token.hasValue) {
            this._token.reset();
            this._router.navigateByUrl("/auth");
            this._popup.open('Token is expired, please login again.', 'ERROR', {duration: 3000});
          } else {
            this._popup.open(event.error.message, 'ERROR', {duration: 3000});
          }
        }
      })
    );
  }
}
