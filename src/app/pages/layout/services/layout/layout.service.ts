import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { skip } from 'rxjs/operators';
import { ConfirmService } from 'src/app/pages/layout/common/confirm';
import { Token } from 'src/app/services/token';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LayoutService {
  private _admin: BehaviorSubject<any> = new BehaviorSubject(null);
  get admin(): Observable<any> {
    return this._admin.pipe(skip(1));
  }
  constructor(
    private _confirm: ConfirmService,
    private _token: Token,
    private _router: Router,
    private _http: HttpClient
  ) {
    this.refreshAdmin();
  }
  refreshAdmin() {
    const url = '/admins/profile';
    this._http.get<Api.Response<any>>(url).subscribe((resp) => {
      if (resp) {
        this._admin.next(resp.result);
        // console.log(resp.result);
      }
    });
  }
  logout() {
    const info = {
      title: 'Confirm Logout',
      message: 'Are you sure, you want to logout?',
    };
    this._confirm.popup(info).subscribe((confirm) => {
      if (confirm) {
        this._token.clear();
        this._router.navigateByUrl('/auth/login');
      }
    });
  }
}
