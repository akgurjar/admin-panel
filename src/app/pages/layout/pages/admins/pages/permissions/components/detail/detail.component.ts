import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '@layout/pages/admins/services/admin.service';
import { Permission } from '../../models/permission.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  result: Permission = new Permission();
  readonly colors: Record<string, string> = {
    ADD: '#03a9f4',
    VIEW: '#2ecc71',
    EDIT: '#34495e',
    STATUS: '#ff9800',
    DELETE: '#f44336',
  };
  readonly icons: Record<string, string> = {
    ADD: 'add_box',
    VIEW: 'preview',
    EDIT: 'edit',
    STATUS: 'block',
    DELETE: 'delete',
  };
  constructor(@Inject(MAT_DIALOG_DATA) id: string, adminService: AdminService) {
    adminService.permissionById(id).then((result) => {
      console.info(result);
      this.result = Permission.parse(result as Permission);
    });
  }
}
