import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Token } from '@token';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanLoad {
  constructor(
    private _token: Token,
    private _router: Router
  ) {}
  async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
    if (!this._token.value || !await this._token.verify()) {
      this._router.navigateByUrl('/auth');
      return false;
    }
    return true;
  }
}
