import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpComponent } from './otp.component';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [OtpComponent],
  imports: [CommonModule, SharedModule],
  exports: [OtpComponent],
})
export class OtpModule {}
