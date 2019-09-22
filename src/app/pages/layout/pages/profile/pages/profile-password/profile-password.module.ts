import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePasswordRoutingModule } from './profile-password-routing.module';
import { ProfilePasswordComponent } from './view/profile-password.component';

@NgModule({
  declarations: [ProfilePasswordComponent],
  imports: [
    CommonModule,
    ProfilePasswordRoutingModule
  ]
})
export class ProfilePasswordModule { }
