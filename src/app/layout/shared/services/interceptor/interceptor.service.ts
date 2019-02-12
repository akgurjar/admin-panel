import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Router } from '@angular/router';
import { Token } from '@token';
import { PopupService } from '@popup';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(
    private _token: Token,
    private _router: Router,
    private _popup: PopupService
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this._token.hasValue) {
      return next.handle(req.clone({
        headers: req.headers.set('Authorization', `Bearer ${this._token.value}`)
      })).pipe(tap(event => {
        if (event instanceof HttpResponse) {
          //
        }
      }, event => {
        if (event instanceof HttpErrorResponse) {
          //
        }
      }));
    } else {
      this._popup.open('Your session is expired, Please login again.', 'ERROR', {duration: 300});
      this._router.navigateByUrl('/auth');
    }
  }
}
