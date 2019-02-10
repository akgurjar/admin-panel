import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';
import { skip } from 'rxjs/operators';


@Injectable()
export class UsersService {
  private _users: BehaviorSubject<Api.ListResult<any>> = new BehaviorSubject(null);
  readonly changes = this._users.pipe(skip(1));
  constructor(
    private _http: HttpClient
  ) {
    // this._users.
  }
  fetch(params = {}) {
    const url = `${environment.apiBaseUrl}/users`;
    this._http.get<Api.ListResponse<any>>(url, {params}).subscribe(resp => {
      this._users.next(resp.result);
    });
  }
}
