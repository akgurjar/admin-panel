import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';

import {
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule
} from '@angular/material';
import { AuthService } from './auth.service';
import { ButtonLoaderModule } from '../common/button-loader/button-loader.module';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgotComponent,
    ResetComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    ButtonLoaderModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
