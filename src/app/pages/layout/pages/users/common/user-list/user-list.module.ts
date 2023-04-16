import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserFilterComponent } from './user-filter/user-filter.component';
import { TableModule } from 'src/app/pages/layout/common/table';
import { UserListService } from './user-list.service';
import { SharedModule } from '@app/common/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { ConfirmModule } from 'src/app/pages/layout/common/confirm';

@NgModule({
  declarations: [UserListComponent, UserFilterComponent],
  imports: [
    CommonModule,
    TableModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    ConfirmModule,
  ],
  exports: [UserListComponent],
  providers: [UserListService],
})
export class UserListModule {}
