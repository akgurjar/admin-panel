import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Profile } from './profile.model';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  isLoaded = false;
  private $profile = new BehaviorSubject<Profile | null>(null);
  readonly changes = this.$profile.asObservable();
  constructor(private $http: HttpClient, private $token: TokenService) {}
  query(): Observable<void> {
    return new Observable<void>((observer) => {
      // this.$http.get<Api.Response<any>>(`~/profile`).subscribe((resp) => {
      //   this.isProfileLoaded = true;
      //   this.$profile.next(resp.result);
      //   observer.complete();
      // }, () => {
      //   console.log('Error');
      //   this.isProfileLoaded = true;
      //   observer.complete();
      // });
      if (this.$token.get()) {
        this.$profile.next(
          Profile.parse({
            id: 'Guest Admin',
            name: 'Guest Admin',
            picture: 'null',
            email: 'test@yopmail.com',
          })
        );
      }
      this.isLoaded = true;
      observer.complete();
    });
  }
  logout() {
    this.$token.clear();
    this.$profile.next(null);
  }
}
