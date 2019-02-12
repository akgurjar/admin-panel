import { Injectable } from '@angular/core';
// import { Observable, Observer } from 'rxjs';
import { Token } from '@token';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';
import { PopupService } from '@popup';

@Injectable()
export class AuthService {

  constructor(
    private _token: Token,
    private _popup: PopupService,
    private _http: HttpClient
  ) { }
  async login({username, password}: Auth.LoginCredential, remember: boolean = false): Promise<boolean> {
    const url = `${environment.apiBaseUrl}/admins/authenticate`;
    const resp = await this._http.post<Api.Response<string>>(url, {email: username, password}).toPromise();
    if (resp.result) {
      this._token.rememberToken(remember);
      this._token.value = resp.result;
    }
    return resp.result && !!resp.result;
  }
  async forgot(email: string): Promise<boolean> {
    const resp = await new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        if (email === 'admin@test.com') {
          resolve(true);
        } else {
          this._popup.open('Email is not registered.', 'ERROR', {
            duration: 4000
          });
          reject(new Error('Forgot Error'));
        }
      }, 4000);
    });
    return resp;
  }
  async reset(password: string): Promise<boolean> {
    const resp = await new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        if (password === 'asdfghjkl') {
          resolve(true);
        } else {
          reject(new Error('Reset Error'));
        }
      }, 4000);
    });
    return resp;
  }
}
