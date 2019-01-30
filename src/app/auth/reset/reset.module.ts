import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetRoutingModule } from './reset-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ResetComponent } from './reset.component';

@NgModule({
  declarations: [
    ResetComponent
  ],
  imports: [
    CommonModule,
    ResetRoutingModule,
    SharedModule
  ]
})
export class ResetModule { }
