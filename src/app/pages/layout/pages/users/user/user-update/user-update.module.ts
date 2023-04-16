import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserUpdateRoutingModule } from './user-update-routing.module';
import { UserUpdateComponent } from './user-update.component';
import { UserFormModule } from '../../common/user-form/user-form.module';

@NgModule({
  declarations: [UserUpdateComponent],
  imports: [
    CommonModule,
    UserUpdateRoutingModule,
    UserFormModule
  ]
})
export class UserUpdateModule { }
