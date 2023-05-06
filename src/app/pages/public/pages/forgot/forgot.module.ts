import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotRoutingModule } from './forgot-routing.module';
import { ForgotComponent } from './view/forgot.component';
import { PublicSharedModule } from '@public/common';

@NgModule({
  declarations: [ForgotComponent],
  imports: [CommonModule, ForgotRoutingModule, PublicSharedModule],
})
export class ForgotModule {}
