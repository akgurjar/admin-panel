import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserFilterComponent } from './user-filter/user-filter.component';
import { ListingModule } from 'src/app/layout/common/listing';
import { TableModule } from 'src/app/layout/common/table';
import { UserListService } from './user-list.service';
import { SharedModule } from 'src/app/layout/shared/shared.module';
import { MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [
    UserListComponent,
    UserFilterComponent
  ],
  imports: [
    CommonModule,
    ListingModule,
    TableModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule
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