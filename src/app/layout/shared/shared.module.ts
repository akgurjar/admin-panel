import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule as RootSharedModule } from '../../shared/shared.module';
import {
  MatToolbarModule,
  MatRippleModule,
  MatMenuModule,
  MatSidenavModule,
  MatBadgeModule,
  MatCardModule,
  MatProgressBarModule
} from '@angular/material';
import { ConfirmModule } from '../common/confirm';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { BreadcrumbService } from './services/breadcrumb';
import { LayoutService } from './services/layout/layout.service';


const Modules = [
  RootSharedModule,
  ConfirmModule,
  MatToolbarModule,
  MatRippleModule,
  MatMenuModule,
  MatSidenavModule,
  MatBadgeModule,
  MatCardModule,
  MatProgressBarModule
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ...Modules
  ],
  exports: [
    ...Modules
  ],
  providers: [
    LayoutService,
    BreadcrumbService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ]
})
export class SharedModule { }
