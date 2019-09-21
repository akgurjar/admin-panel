import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/shared';
import {
  MatToolbarModule,
  MatRippleModule,
  MatMenuModule,
  MatSidenavModule,
  MatBadgeModule,
  MatCardModule,
  MatProgressBarModule
} from '@angular/material';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfirmModule } from '../confirm';
import { InterceptorService } from './services';


const Modules = [
  SharedModule,
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
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ]
})
export class LayoutSharedModule { }
