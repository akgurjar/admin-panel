import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, UrlSegment, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Token } from '@token';
import { Route } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmResetComponent } from '../../components/confirm-reset/confirm-reset.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(
    private _token: Token,
    private _router: Router,
    private _dialog: MatDialog
  ) {}
  async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
    return await this._handler(segments.map(segment => segment.path));
  }
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return await this._handler(state.url.split('/').filter(path => path));
  }
  private async _handler(paths: string[]): Promise<boolean> {
    if (this._token.value && await this._token.verify()) {
      if (paths.length === 2 && paths[1] === 'reset') {
        const status = await this._dialog.open(ConfirmResetComponent, {
          disableClose: true,
          autoFocus: false
        }).afterClosed().toPromise();
        if (status) {
          this._token.reset();
          return true;
        }
      }
      this._router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
