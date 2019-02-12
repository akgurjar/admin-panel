import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Token } from '@token';
import { PopupService } from '@popup';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate, CanLoad {
  constructor(
    private _token: Token,
    private _router: Router,
    private _popup: PopupService
  ) {}
  async canActivate(): Promise<boolean> {
    return await this._handler();
  }
  async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
    return await this._handler();
  }
  private async _handler() {
    if (!this._token.value || !await this._token.verify()) {
      this._router.navigateByUrl('/auth');
      this._popup.open('Please login to access Dashboard.', 'WARNING', {duration: 3000});
      return false;
    }
    return true;
  }
}
