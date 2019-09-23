import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopupService } from 'src/app/common/popup';
import { Token } from 'src/app/services/token';
import { LoginCredential } from '../interfaces';
import { ProfileService } from '@profile';

@Injectable()
export class PublicService {

  constructor(
    private $token: Token,
    private $popup: PopupService,
    private $http: HttpClient,
    private $profile: ProfileService
  ) { }
  async login(creds: LoginCredential, remember: boolean = false): Promise<boolean> {
    // const url = '/admins/authenticate';
    // const resp = await this.$http.post<Api.Response<string>>(url, creds).toPromise();
    let resp: Api.Response<string>;
    if (creds.email === 'admin@gmail.com' && creds.password === 'asdfghjkl') {
      resp = {
        message: 'Login Successfull',
        result: btoa(`${creds.email}:${creds.password}`)
      };
      this.$profile.next({
        ...creds,
        displayName: 'Guest Admin'
      });
    }
    if (resp && resp.result) {
      this.$token.rememberToken(remember);
      this.$token.value = resp.result;
    }
    return resp && resp.result && !!resp.result;
  }
  async forgot(email: string): Promise<boolean> {
    const resp = await new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        if (email === 'admin@gmail.com') {
          resolve(true);
        } else {
          this.$popup.open('Email is not registered.', 'ERROR', {
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
