import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserFilterComponent } from './user-filter/user-filter.component';
import { TableModule } from 'src/app/pages/layout/common/table';
import { UserListService } from './user-list.service';
import { SharedModule } from 'src/app/pages/layout/shared/shared.module';
import { MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSelectModule } from '@angular/material';
import { ConfirmModule } from 'src/app/pages/layout/common/confirm';

@NgModule({
  declarations: [
    UserListComponent,
    UserFilterComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    ConfirmModule
  ],
  exports: [
    UserListComponent
  ],
  entryComponents: [
    UserFilterComponent
  ],
  providers: [
    UserListService
  ]
})
export class UserListModule {}
