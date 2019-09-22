import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserListService {
  private $subject: BehaviorSubject<Api.ListResult<any>> = new BehaviorSubject(null);
  readonly changes = this.$subject.asObservable();
  constructor(private $http: HttpClient) {
  }
  async next(params: any = {pageIndex: 0, pageSize: 10}) {
    const url = '~/users';
    const resp = await this.$http.get<Api.ListResponse<any>>(url, {params}).toPromise();
    if (resp) {
      this.$subject.next(resp.result);
    }
    return;
  }
}
