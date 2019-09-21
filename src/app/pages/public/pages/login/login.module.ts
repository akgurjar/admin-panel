import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './view/login.component';
import { PublicSharedModule } from '../../common';
import { MatSlideToggleModule } from '@angular/material';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    PublicSharedModule,
    MatSlideToggleModule
  ]
})
export class LoginModule { }
