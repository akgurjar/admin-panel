import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '@layout/pages/admins/services/admin.service';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { AppScope } from '../../models/permission.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  userTypes = Object.entries(AppScope);
  readonly form = this.fb.group({
    id: ['', Validators.required],
    title: ['', Validators.required],
    description: ['', Validators.required],
    access: this.fb.group({
      1: this.fb.control<string[]>([]),
      2: this.fb.control<string[]>([]),
    }),
  });
  constructor(
    @Inject(DialogRef) private dialogRef: DialogRef,
    private adminService: AdminService,
    private fb: NonNullableFormBuilder
  ) {}
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
      // this.adminService
      //   .updatePermissionById(changes, this.id)
      //   .then(() => {
      //     this.dialogRef.close();
      //   })
      //   .catch(() => {
      //     this.form.enable();
      //   });
    } else if (this.form.enabled) {
      this.form.markAllAsTouched();
    }
  }
}
