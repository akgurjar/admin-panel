import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './view/login.component';
import { PublicSharedModule } from '@public/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthComponent } from './components/auth/auth.component';
import { VerifyComponent } from './components/verify/verify.component';
import { SetupComponent } from './components/setup/setup.component';
import { OtpModule } from '@app/common/otp/otp.module';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    VerifyComponent,
    SetupComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    PublicSharedModule,
    MatSlideToggleModule,
    OtpModule,
    MatSelectModule,
  ],
})
export class LoginModule {}
