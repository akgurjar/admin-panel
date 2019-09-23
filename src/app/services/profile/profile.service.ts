import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Token } from '@token';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  isProfileLoaded = false;
  private $profile: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly changes = this.$profile.asObservable();
  constructor(
    private $http: HttpClient,
    private $token: Token,
  ) { }
  queryProfile(): Observable<void> {
    return new Observable((observer: Observer<void>) => {
      // this.$http.get<Api.Response<any>>(`~/profile`).subscribe((resp) => {
      //   this.isProfileLoaded = true;
      //   this.$profile.next(resp.result);
      //   observer.complete();
      // }, () => {
      //   console.log('Error');
      //   this.isProfileLoaded = true;
      //   observer.complete();
      // });
      this.next(null);
      this.isProfileLoaded = true;
      observer.next(this.$profile.getValue());
    });
  }
  next(value) {
    this.$profile.next(value);
  }
  logout() {
    this.next(0);
  }
}
