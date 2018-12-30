import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { skip } from 'rxjs/operators';
import { ConfirmService } from '@confirm';
import { Token } from '@token';
import { Router } from '@angular/router';

@Injectable()
export class LayoutService {
  private _admin: BehaviorSubject<any> = new BehaviorSubject(null);
  get admin(): Observable<any> {
    return this._admin.pipe(skip(1));
  }
  constructor(
    private _confirm: ConfirmService,
    private _token: Token,
    private _router: Router
  ) { }
  refreshAdmin() {}
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
