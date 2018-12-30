import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Token } from '@token';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { tap } from 'rxjs/operators';
import { RequestLoaderService } from '../request-loader/request-loader.service';

@Injectable()
export class LayoutInterceptor implements HttpInterceptor {
  constructor(
    private _token: Token,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _reqLoader: RequestLoaderService
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this._token.hasValue) {
      const authRequest =  req.clone({
        headers: req.headers.set('jwtauthorization', `Bearer ${this._token.value}`)
      });
      this._reqLoader.markAsLoading();
      return next.handle(authRequest).pipe(tap(event => {
        if (event instanceof HttpResponse) {
          this._reqLoader.completeLoading();
        }
      }, event => {
        if (event instanceof HttpErrorResponse) {
          this._reqLoader.completeLoading();
        }
      }));
    } else {
      this._snackBar.open('Your session is expired, Please login again.');
      this._router.navigateByUrl('/auth');
    }
  }
}
