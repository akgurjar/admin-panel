import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { skip } from 'rxjs/operators';
import { ConfirmService } from '@confirm';
import { Token } from '@token';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';

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
    const url = `${environment.apiBasePath}/`;
    this._http.get<ApiResponse<any>>(url).subscribe((resp) => {
      this._admin.next(resp.result);
    });
  }
  logout() {
    const info = {
      title: 'Confirm Logout',
      message: 'Are you sure, you want to logout?'
    };
    this._confirm.popup(info).subscribe((confirm) => {
      if (confirm) {
        this._token.reset();
        this._router.navigateByUrl('/auth/login');
      }
    });
  }
}
