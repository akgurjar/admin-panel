import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AdminService {
  constructor(private $http: HttpClient) {}
  async accounts() {
    const req = this.$http.get<IApi.List>('$user/admins');
    const res = await lastValueFrom(req);
    console.info(res.result);
    return res.result;
  }
  async roles() {
    const req = this.$http.get<IApi.List>('$user/roles');
    const res = await lastValueFrom(req);
    console.info(res.result);
    return res.result;
  }
  async permissions() {
    const req = this.$http.get<IApi.List>('$user/permissions');
    const res = await lastValueFrom(req);
    console.info(res.result);
    return res.result;
  }
  async permissionById(id: string) {
    const req = this.$http.get<IApi.Response<object>>(
      `$user/permissions/${id}`
    );
    const res = await lastValueFrom(req);
    console.info(res.result);
    return res.result;
  }
}
