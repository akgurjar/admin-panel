import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './view/reports.component';
import { LayoutSharedModule } from '../../common/layout-shared';

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    LayoutSharedModule
  ]
})
export class ReportsModule { }
