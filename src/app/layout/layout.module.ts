import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BreadcrumbService } from './services/breadcrumb/breadcrumb.service';

@NgModule({
  declarations: [
    LayoutComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ],
  providers: [
    BreadcrumbService
  ]
})
export class LayoutModule { }
