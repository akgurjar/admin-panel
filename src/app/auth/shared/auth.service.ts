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
    private _popup: PopupService
  ) { }
  async login({username, password}: Auth.LoginCredential, remember: boolean = false): Promise<boolean> {

    const resp = await new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin@gmail.com' && password === 'asdfghjkl') {
          this._popup.open('Login successful', 'SUCCESS', {
            duration: 4000
          });
          this._token.value = 'asdfghjkl';
          this._token.rememberToken(remember);
          resolve(true);
        } else if (username === 'admin@test.com') {
          this._popup.open('Invalid credentials.', 'ERROR', {
            duration: 4000
          });
          reject(new Error('Invalid credentials!'));
        } else {
          this._popup.open('Account doesn\'t exists.', 'ERROR', {
            duration: 4000
          });
          reject(new Error('Forgot Error'));
        }
      }, 4000);
    });
    return resp;
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
