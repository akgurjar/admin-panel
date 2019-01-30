import { Injectable } from '@angular/core';

import { environment } from '@environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(
    private _http: HttpClient
  ) {
    // console.log(this.value);
  }
  get isOneTimeToken(): boolean {
    const remember = localStorage.getItem(environment.tokenRememberKey);
    return ![true, 'true'].some(value => remember === value);
  }
  get value() {
    if (this.isOneTimeToken && document.cookie.indexOf('checkClose') === -1) {
      this.reset();
      return null;
    }
    return localStorage.getItem(environment.tokenKey);
  }
  set value(token: string) {
    if (this.isOneTimeToken) {
      document.cookie = `checkClose=true;`;
    }
    localStorage.setItem(environment.tokenKey, token);
  }
  get hasValue(): boolean {
    return !!this.value;
  }
  async verify(): Promise<boolean> {
    if (this.value === 'asdfghjkl') {
      return true;
    }
    return false;
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
  get header() {
    return `Bearer ${this.value}`;
  }
}
