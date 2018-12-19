import { Injectable } from '@angular/core';
// import { Observable, Observer } from 'rxjs';
import { Token } from '@token';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(
    private _token: Token,
    private _snackBar: MatSnackBar
  ) { }
  async login(credentials: Auth.LoginCredential, remember: boolean = false): Promise<boolean> {
    const resp = await new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        if (credentials.username === 'admin@test.com' && credentials.password === 'asdfghjkl') {
          this._token.value = 'asdfghjkl';
          this._token.rememberToken(remember);
          resolve(true);
        } else {
          this._snackBar.open('Error ! Invalid credentials.', null, {
            verticalPosition: 'top',
            horizontalPosition: 'right',
            duration: 4000
          });
          reject(new Error('Login Error'));
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
