import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileUpdateRoutingModule } from './profile-update-routing.module';
import { ProfileUpdateComponent } from './profile-update.component';

@NgModule({
  declarations: [ProfileUpdateComponent],
  imports: [
    CommonModule,
    ProfileUpdateRoutingModule
  ]
})
export class ProfileUpdateModule { }
