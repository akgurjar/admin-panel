import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AuthService {

  constructor() { }
  login(credentials: Auth.LoginCredentials): Observable<boolean> {
    return Observable.create((observer: Observer<boolean>) => {
      setTimeout(() => {
        if (credentials.username === 'admin@test.com' && credentials.password === 'asdfghjkl') {
          observer.next(true);
        } else {
          observer.error(new Error('Login Error'));
        }
      }, 4000);
    });
  }
  forgot(email: string): Observable<boolean> {
    return Observable.create((observer: Observer<boolean>) => {
      setTimeout(() => {
        if (email === 'admin@test.com') {
          observer.next(true);
        } else {
          observer.error(new Error('Forgot Password Error'));
        }
      }, 4000);
    });
  }
  reset(password: string): Observable<boolean> {
    return Observable.create((observer: Observer<boolean>) => {
      setTimeout(() => {
        if (password === 'asdfghjkl') {
          observer.next(true);
        } else {
          observer.error(new Error('Password Reset Error'));
        }
      }, 4000);
    });
  }
}
