import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopupService } from 'src/app/common/popup';
import { Token } from 'src/app/services/token';
import { LoginCredential } from '../interfaces';
import { firstValueFrom } from 'rxjs';
import { ProfileService } from '@app/services/profile/profile.service';

@Injectable()
export class PublicService {
  constructor(
    private $token: Token,
    private $popup: PopupService,
    private $http: HttpClient,
    private $profile: ProfileService
  ) {}
  async login(
    email: string,
    password: string,
    remember: boolean = false
  ): Promise<void> {
    const url = '~/accounts/login';
    const req = this.$http.post<Api.Login>(url, {
      email,
      password,
    });
    const res = await firstValueFrom(req);
    const { accessToken, refreshToken } = res.result;
    this.$token.set(accessToken, refreshToken, remember);
    this.$profile.query();
  }
  async forgot(email: string): Promise<boolean> {
    const req = this.$http.post<Api.Login>('~/passwords', { email });
    const res = await firstValueFrom(req);
    this.$popup.success(res.message);
    return true;
  }
  async reset(password: string, token: string): Promise<boolean> {
    const req = this.$http.put<Api.Login>(
      '~/passwords',
      { password },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const res = await firstValueFrom(req);
    this.$popup.success(res.message);
    return true;
  }
}
