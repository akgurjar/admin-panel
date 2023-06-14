import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionsRoutingModule } from './permissions-routing.module';
import { PermissionsComponent } from './view/permissions.component';
import { SharedModule } from '@layout/common/shared';
import { MatTableModule } from '@angular/material/table';
import { DetailComponent, UpdateComponent } from './components';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  declarations: [PermissionsComponent, DetailComponent, UpdateComponent, CreateComponent],
  imports: [
    CommonModule,
    PermissionsRoutingModule,
    SharedModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class PermissionsModule {}
