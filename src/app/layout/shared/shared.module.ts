import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule as RootSharedModule } from '../../shared/shared.module';
import {
  MatToolbarModule,
  MatRippleModule,
  MatMenuModule,
  MatSidenavModule,
  MatBadgeModule,
  MatCardModule
} from '@angular/material';


const Modules = [
  RootSharedModule,
  MatToolbarModule,
  MatRippleModule,
  MatMenuModule,
  MatSidenavModule,
  MatBadgeModule,
  MatCardModule
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
  ]
})
export class SharedModule { }
