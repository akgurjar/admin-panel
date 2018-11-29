import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCreateRoutingModule } from './user-create-routing.module';
import { UserCreateComponent } from './user-create.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserCreateComponent],
  imports: [
    CommonModule,
    UserCreateRoutingModule,
    SharedModule
  ]
})
export class UserCreateModule { }
