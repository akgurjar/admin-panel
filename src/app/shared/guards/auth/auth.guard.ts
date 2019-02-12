import { Injectable } from '@angular/core';
import { CanLoad, UrlSegment, Router } from '@angular/router';
import { Token } from '@token';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private _token: Token,
    private _router: Router
  ) {}
  async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
    if (this._token.value && await this._token.verify()) {
      console.log(segments);
      if (segments.length === 3) {
        this._token.reset();
        return true;
      }
      this._router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
