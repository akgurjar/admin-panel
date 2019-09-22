import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './view/user-list.component';
import { UserFilterComponent } from './components/user-filter/user-filter.component';
import { TableModule } from 'src/app/pages/layout/common/table';
import { UserListService } from './services/user-list.service';
import { LayoutSharedModule } from 'src/app/pages/layout/common/layout-shared';
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
    LayoutSharedModule,
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
