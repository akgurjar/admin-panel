import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '@environment';

@Injectable()
export class UserListService {
  private _subject: BehaviorSubject<any[]> = new BehaviorSubject([]);
  readonly changes = this._subject.asObservable();
  constructor(private _http: HttpClient) {
    this.next(); 
  }
  async next(params: any = {pageIndex: 0, pageSize: 10}) {
    params['_page'] = (params.pageIndex + 1).toString();
    params['_limit'] = params.pageSize.toString();
    const url = `${environment.apiBasePath}/users`
    const users = await this._http.get(url, {params}).toPromise();
    console.log(users);
    this._subject.next(users as any[]);
    return;
  }
}
