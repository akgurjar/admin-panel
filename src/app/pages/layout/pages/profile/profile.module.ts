import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './view/profile.component';
import { LayoutSharedModule } from '../../common/layout-shared';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    LayoutSharedModule
  ]
})
export class ProfileModule { }
