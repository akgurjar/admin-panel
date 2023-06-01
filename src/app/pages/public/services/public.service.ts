import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '@profile';
import { firstValueFrom } from 'rxjs';
import { PopupService } from '@popup';
import { TokenService } from '@token';
import * as ILogin from '../interfaces/login.interface';
import { NextStep, MFA_SETUP_ROUTE, MFA_VERIFY_ROUTE } from '../constants';
import { Router } from '@angular/router';

@Injectable()
export class PublicService {
  constructor(
    private $token: TokenService,
    private $popup: PopupService,
    private $http: HttpClient,
    private $profile: ProfileService,
    private $router: Router
  ) {}
  async auth(
    email: string,
    password: string,
    remember: boolean = false
  ): Promise<void> {
    const url = '$auth/accounts/login';
    const req = this.$http.post<ILogin.AuthResp>(url, {
      email,
      password,
    });
    const { result } = await firstValueFrom(req);
    if (result.nextStep === NextStep.Done) {
      this.$token.set(result.accessToken, result.refreshToken, remember);
      this.$profile.query();
    } else if (result.nextStep === NextStep.Setup) {
      this.$router.navigate([MFA_SETUP_ROUTE.url], {
        queryParams: {
          qr: result.qrUrl,
          token: result.mfaToken,
          remember,
        },
      });
    } else if (result.nextStep === NextStep.Verify) {
      this.$router.navigate([MFA_VERIFY_ROUTE.url], {
        queryParams: {
          platform: result.platform,
          token: result.mfaToken,
          remember,
        },
      });
    }
  }
  async verify(
    payload: Record<string, string>,
    token: string,
    remember = false
  ): Promise<void> {
    const url = '$auth/accounts/login';
    const req = this.$http.put<ILogin.VerifyResp>(url, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const { result } = await firstValueFrom(req);
    this.$token.set(result.accessToken, result.refreshToken, remember);
    this.$profile.query();
  }
  async forgot(email: string): Promise<boolean> {
    const req = this.$http.post<IApi.Response<unknown>>('$auth/passwords', {
      email,
    });
    const res = await firstValueFrom(req);
    this.$popup.success(res.message);
    return true;
  }
  async reset(password: string, token: string): Promise<boolean> {
    const req = this.$http.put<IApi.Response<unknown>>(
      '$auth/passwords',
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
