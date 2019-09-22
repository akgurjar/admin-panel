import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './view/dashboard.component';
import { LayoutSharedModule } from '../../common/layout-shared';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutSharedModule
  ]
})
export class DashboardModule {
}
