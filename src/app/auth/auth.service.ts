import { Injectable } from '@angular/core';
// import { Observable, Observer } from 'rxjs';
import { Token } from '@token';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';

@Injectable()
export class AuthService {

  constructor(
    private _http: HttpClient,
    private _token: Token,
    private _snackBar: MatSnackBar
  ) { }
  async login(credentials: Auth.LoginCredential, remember: boolean = false): Promise<boolean> {
    const url = `${environment.apiBasePath}/authenticate`;
    const resp = await this._http.post<Api.Response<Auth.LoginResult>>(url, credentials).toPromise();
    if (resp.result && resp.result.token) {
      this._token.value = resp.result.token;
      this._token.rememberToken(remember);
    }
    return !!resp.result.token;
  }
  async forgot(email: string): Promise<boolean> {
    const resp = await new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        if (email === 'admin@test.com') {
          resolve(true);
        } else {
          this._snackBar.open('Error ! Email is not registered.', null, {
            verticalPosition: 'top',
            horizontalPosition: 'right',
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
