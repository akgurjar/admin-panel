import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  isProfileLoaded = false;
  private $profile: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly changes = this.$profile.asObservable();
  constructor(private $http: HttpClient) { }
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
      this.$profile.next(null);
      this.isProfileLoaded = true;
      observer.next(this.$profile.getValue());
    });
  }
  logout() {
    this.$profile.next(0);
  }
}
