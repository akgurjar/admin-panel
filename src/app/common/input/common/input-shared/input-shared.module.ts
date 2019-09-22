import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { ValidationErrorModule } from 'src/app/pipes';
import { SharedModule } from 'src/app/common/shared';

const Modules = [
  MatFormFieldModule,
  MatInputModule,
  ValidationErrorModule,
  SharedModule
];

@NgModule({
  imports: Modules,
  exports: Modules
})
export class InputSharedModule { }
