import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotRoutingModule } from './forgot-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ForgotComponent } from './forgot.component';

@NgModule({
  declarations: [
    ForgotComponent
  ],
  imports: [
    CommonModule,
    ForgotRoutingModule,
    SharedModule
  ]
})
export class ForgotModule { }
