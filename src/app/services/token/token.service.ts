import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { env } from '@env';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  readonly #rememberKey = '_c';
  readonly #refreshKey = '_r';
  readonly #accessKey = '_a';
  constructor(private $http: HttpClient) {
    // console.log(this.value);
  }
  get() {
    const cache = this.cache();
    const accessToken = cache.getItem(this.#accessKey);
    const refreshToken = cache.getItem(this.#refreshKey);
    if (accessToken || refreshToken) {
      return { accessToken, refreshToken };
    }
    return null;
  }
  cache(): Storage {
    const remember = localStorage.getItem(this.#rememberKey);
    if (remember && JSON.parse(remember)) {
      return localStorage;
    }
    return sessionStorage;
  }
  set(accessToken: string, refreshToken: string, remember: boolean) {
    this.clear();
    localStorage.setItem(this.#rememberKey, remember.toString());
    const cache = this.cache();
    cache.setItem(this.#refreshKey, refreshToken);
    cache.setItem(this.#accessKey, accessToken);
  }
  setAccessToken(accessToken: string): void {
    const cache = this.cache();
    cache.setItem(this.#accessKey, accessToken);
  }
  get hasValue(): boolean {
    return !!this.get();
  }
  async refresh(): Promise<void> {
    try {
      const req = this.$http.get<IApi.Response<any>>(`$auth/sessions/refresh`, {
        headers: {
          Authorization: this.header('refreshToken'),
        },
      });
      const res = await lastValueFrom(req);
      this.setAccessToken(res.result);
    } catch (err) {
      this.clear();
      return Promise.reject(err);
    }
  }
  clear() {
    localStorage.removeItem(this.#accessKey);
    localStorage.removeItem(this.#refreshKey);
    localStorage.removeItem(this.#rememberKey);
    sessionStorage.removeItem(this.#accessKey);
    sessionStorage.removeItem(this.#refreshKey);
  }
  header(key: 'accessToken' | 'refreshToken') {
    const value = this.get();
    if (!value) {
      return '';
    }
    return `Bearer ${value[key]}`;
  }
}
