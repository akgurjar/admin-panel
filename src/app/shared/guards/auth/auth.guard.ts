import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, UrlSegment, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Token } from '@token';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(
    private _token: Token,
    private _router: Router
  ) {}
  async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
    console.log(segments);
    return await this._handler(segments);
  }
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return await this._handler([]);
  }
  private async _handler(segments: UrlSegment[]): Promise<boolean> {
    if (this._token.value && await this._token.verify()) {
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
