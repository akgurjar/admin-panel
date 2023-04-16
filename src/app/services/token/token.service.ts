import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { env } from '@env';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private $http: HttpClient) {
    // console.log(this.value);
  }
  get(): string | null {
    return (
      localStorage.getItem(env.tokenKey) || sessionStorage.getItem(env.tokenKey)
    );
  }
  set(token: string, remember?: boolean) {
    this.clear();
    if (remember) {
      localStorage.setItem(env.tokenKey, token);
    } else {
      sessionStorage.setItem(env.tokenKey, token);
    }
  }
  get hasValue(): boolean {
    return !!this.get();
  }
  // verify(): Promise<boolean> {
  //   return new Promise((resolve, reject) => {
  //     const token = this.get();
  //     if (!token) {
  //       return resolve(false);
  //     }
  //     const headers = new HttpHeaders({
  //       Authorization: this.header,
  //     });
  //     this.$http
  //       .head('/token', { headers })
  //       .subscribe({
  //         complete: () => resolve(true),
  //         error: () => resolve(false),
  //       });
  //   });
  // }
  clear() {
    localStorage.removeItem(env.tokenKey);
    sessionStorage.removeItem(env.tokenKey);
  }
  get header() {
    return `Bearer ${this.get()}`;
  }
}
