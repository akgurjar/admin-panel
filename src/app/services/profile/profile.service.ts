import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Profile } from './profile.model';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  isLoaded = false;
  readonly #profile: WritableSignal<Profile | null> = signal(null);
  readonly data: Signal<Profile | null> = computed(() => this.#profile());
  constructor(private $http: HttpClient, private $token: TokenService) {}
  async query(): Promise<void> {
    try {
      if (!this.$token.hasValue) {
        this.isLoaded = true;
        return;
      }
      const req = this.$http.get<Api.Response<any>>(`~/accounts/profile`, {
        headers: { Authorization: this.$token.header('accessToken') },
      });
      const res = await lastValueFrom(req);
      this.#profile.set(Profile.parse(res.result));
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          try {
            await this.$token.refresh();
            await this.query();
          } catch (err1) {
            if (err1 instanceof HttpErrorResponse) {
              if (err1.status === 401) {
                this.clear();
              }
            }
            await Promise.reject(err1);
          }
        }
      }
    } finally {
      this.isLoaded = true;
    }
  }
  async logout() {
    const req = this.$http.delete<Api.Response<any>>(`~/sessions/logout`, {
      headers: {
        Authorization: this.$token.header('refreshToken'),
      },
    });
    await lastValueFrom(req);
    this.$token.clear();
    this.#profile.set(null);
  }
  clear() {
    this.$token.clear();
    this.#profile.set(null);
  }
}
