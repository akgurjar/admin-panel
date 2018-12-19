import { Injectable } from '@angular/core';

import { environment } from '@environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private _http: HttpClient) { }
  get isOneTimeToken(): boolean {
    return !localStorage.getItem(environment.tokenRememberKey);
  }
  get value() {
    return localStorage.getItem(environment.tokenKey);
  }
  set value(token: string) {
    localStorage.setItem(environment.tokenKey, token);
  }
  get hasValue(): boolean {
    return !!this.value;
  }
  async verify(): Promise<boolean> {
    // this._http.head()
    const resp = await new Promise<boolean>((resolve, reject) => {
      if (this.value === 'asdfghjkl') {
        resolve(true);
      } else {
        resolve(false);
      }
    });
    return resp;
  }
  rememberToken(status: boolean) {
    localStorage.setItem(environment.tokenRememberKey, `${status}`);
  }
  forgetToken() {
    localStorage.removeItem(environment.tokenRememberKey);
  }
  remove() {
    localStorage.removeItem(environment.tokenKey);
  }
  reset() {
    this.remove();
    this.forgetToken();
  }
}
