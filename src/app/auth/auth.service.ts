import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AuthService {

  constructor() { }
  async login(credentials: Auth.LoginCredential): Promise<boolean> {
    const resp = await new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        if (credentials.username === 'admin@test.com' && credentials.password === 'asdfghjkl') {
          resolve(true);
        } else {
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
