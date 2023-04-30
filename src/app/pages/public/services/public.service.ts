import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopupService } from 'src/app/common/popup';
import { Token } from 'src/app/services/token';
import { LoginCredential } from '../interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PublicService {
  constructor(
    private $token: Token,
    private $popup: PopupService,
    private $http: HttpClient
  ) {}
  async login(
    username: string,
    password: string,
    remember: boolean = false
  ): Promise<boolean> {
    const url = '/admins/authenticate';
    const req = this.$http.post<Api.Response<string>>(url, {
      email: username,
      password,
    });
    const resp = await firstValueFrom(req);
    if (resp && resp.result) {
      this.$token.set(resp.result, remember);
    }
    return resp && !!resp.result && !!resp.result;
  }
  async forgot(email: string): Promise<boolean> {
    const resp = await new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        if (email === 'admin@test.com') {
          resolve(true);
        } else {
          this.$popup.open('Email is not registered.', 'ERROR', {
            duration: 4000,
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
