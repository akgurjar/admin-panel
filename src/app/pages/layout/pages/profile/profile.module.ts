import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './view/profile.component';
import { LayoutSharedModule } from '../../common/layout-shared';
import { InputPasswordModule } from 'src/app/common/input/pages/input-password';
import {
  ProfileDetailsComponent,
  ProfileFormComponent,
  ProfilePasswordComponent,
} from './components';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileDetailsComponent,
    ProfileFormComponent,
    ProfilePasswordComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    LayoutSharedModule,
    InputPasswordModule,
    MatTabsModule,
  ]
})
export class ProfileModule { }
