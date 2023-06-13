import { Component, Inject } from '@angular/core';
import { Permission } from '../../models/permission.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '@layout/pages/admins/services/admin.service';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent {
  result: Permission = new Permission();
  readonly form = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    access: this.fb.group({
      1: this.fb.control<string[]>([]),
      2: this.fb.control<string[]>([]),
    }),
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) private id: string,
    @Inject(DialogRef) private dialogRef: DialogRef,
    private adminService: AdminService,
    private fb: NonNullableFormBuilder
  ) {
    adminService.permissionById(id).then((result: Permission): void => {
      const access: Record<string, string[]> = {};
      result.access.forEach((item) => {
        access[item.scope] = [...item.actions];
      });
      this.form.patchValue({
        title: result.title,
        description: result.description,
        access,
      });
      this.result = result;
    });
  }
  onSaveHandler() {
    if (this.form.valid && this.form.enabled) {
      const { access, ...value } = this.form.value;
      this.form.disable();
      const changes = {
        ...value,
        access: Object.entries(access ?? {}).map(([scope, actions]) => ({
          scope,
          actions,
        })),
      };
      this.adminService
        .updatePermissionById(changes, this.id)
        .then(() => {
          this.dialogRef.close();
        })
        .catch(() => {
          this.form.enable();
        });
    } else if (this.form.enabled) {
      this.form.markAllAsTouched();
    }
  }
}
