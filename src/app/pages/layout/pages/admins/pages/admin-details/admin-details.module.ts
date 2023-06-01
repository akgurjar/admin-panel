import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDetailsRoutingModule } from './admin-details-routing.module';
import { AdminDetailsComponent } from './view/admin-details.component';


@NgModule({
  declarations: [
    AdminDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminDetailsRoutingModule
  ]
})
export class AdminDetailsModule { }
