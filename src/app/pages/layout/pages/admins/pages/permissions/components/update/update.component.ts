import { Component, Inject } from '@angular/core';
import { Permission } from '../../models/permission.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '@layout/pages/admins/services/admin.service';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent {
  result: Permission = new Permission();
  readonly form = this.fb.group({
    title: ['', Validators.required],
    access: this.fb.array([]),
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) private id: string,
    private adminService: AdminService,
    private fb: NonNullableFormBuilder
  ) {
    adminService.permissionById(id).then((result: Permission): void => {
      this.form.patchValue({
        title: result.title,
      });
      this.result = result;
    });
  }
}
