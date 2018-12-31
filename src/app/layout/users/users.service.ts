import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _users: BehaviorSubject<Table.Data<any>> = new BehaviorSubject(null);
  get changes() {
    return this._users.asObservable();
  }
  constructor() {
    // this._users.
  }
}
