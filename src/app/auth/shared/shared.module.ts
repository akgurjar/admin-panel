import { NgModule } from '@angular/core';
import { SharedModule as RootSharedModule } from '../../shared/shared.module';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule
} from '@angular/material';

const Modules = [
  RootSharedModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule
];


@NgModule({
  declarations: [],
  imports: [
    ...Modules
  ],
  exports: [
    ...Modules
  ]
})
export class SharedModule { }
