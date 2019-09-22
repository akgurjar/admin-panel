import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './view/users.component';
import { LayoutSharedModule } from '../../common/layout-shared';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    LayoutSharedModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
