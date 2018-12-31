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
        name: 'Ashish Gurjar',
        email: 'gurjar@email.com',
        status: 1
      },
      {
        sn: 2,
        name: 'Ashish Jain',
        email: 'jain@email.com',
        status: 2
      },
      {
        sn: 3,
        name: 'Kamal Dobhal',
        email: 'kamal@email.com',
        status: 3
      },
      {
        sn: 4,
        name: 'Kamal Dobhal',
        email: 'kamal@email.com',
        status: 2
      },
      {
        sn: 5,
        name: 'Kamal Dobhal',
        email: 'kamal@email.com',
        status: 1
      }
    ]);
  }
  next() {
    //
  }
}
