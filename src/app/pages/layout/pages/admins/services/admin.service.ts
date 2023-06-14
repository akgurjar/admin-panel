import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Permission } from '../pages/permissions/models/permission.model';

@Injectable()
export class AdminService {
  constructor(private $http: HttpClient) {}
  async accounts() {
    const req = this.$http.get<IApi.List>('$user/admins');
    req.subscribe((res) => {
      console.info(res);
    });
    // const res = await lastValueFrom(req);
    // console.info(res.result);
    return {
      data: [],
    };
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
  async updatePermissionById(changes: object, id: string): Promise<void> {
    const req = this.$http.patch(`$user/permissions/${id}`, changes);
    const res = await lastValueFrom(req);
    console.info(res);
  }
  async permissionById(id: string): Promise<Permission> {
    const req = this.$http.get<IApi.Response<Permission>>(
      `$user/permissions/${id}`
    );
    const res = await lastValueFrom(req);
    return Permission.parse(res.result);
  }
}
