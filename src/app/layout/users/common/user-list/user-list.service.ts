import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class UserListService {
  private _subject: BehaviorSubject<any[]> = new BehaviorSubject([]);
  get changes(): Observable<any[]> {
    return this._subject.asObservable();
  }
  constructor(private _http: HttpClient) {
    this._subject.next([
      {
        sn: 1,
        name: 'User 1',
        email: 'user@email.com'
      }
    ]);
  }
  next() {
    //
  }
}
