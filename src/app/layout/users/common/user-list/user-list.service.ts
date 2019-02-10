import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '@environment';

@Injectable()
export class UserListService {
  private _subject: BehaviorSubject<Api.ListResult<any>> = new BehaviorSubject(null);
  readonly changes = this._subject.asObservable();
  constructor(private _http: HttpClient) {
    this.next();
  }
  async next(params: any = {pageIndex: 0, pageSize: 10}) {
    const url = `${environment.apiBaseUrl}/users`;
    const resp = await this._http.get<Api.ListResponse<any>>(url, {params}).toPromise();
    console.log(resp);
    this._subject.next(resp.result);
    return;
  }
}
