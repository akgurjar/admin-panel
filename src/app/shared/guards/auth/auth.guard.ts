import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Token } from '@token';
import { Route } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private _token: Token,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log(next);
    return true;
  }
  async canLoad(route: Route, segments: UrlSegment[]) {
    // Password Reset Handler
    if (segments.length === 3 && ['auth', 'reset'].every((path, index) => segments[index].path === path)) {
      this._token.reset();
      // verify password reset link
      return true;
    }
    // When Already logined admin trying to access authentication page
    if (route.path === 'auth' && this._token.value) {
      const verified = await this._token.verify();
      if (verified) {
        this._router.navigateByUrl('/');
        this._snackBar.open('You are already logined.', null,  {
          duration: 3000
        });
        return false;
      } else {
        this._token.reset();
      }
    } else if (route.path === '' && !await this._token.verify()) { // When admin trying to access dashboard without login
      this._token.reset();
      this._router.navigateByUrl('/auth');
      this._snackBar.open('Please Login to access dashboard.', null,  {
        duration: 3000
      });
      return false;
    }
    if (route.path === '' && this._token.isOneTimeToken) {
      console.log('one time token');
      this._token.reset();
    }
    return true;
  }
}
