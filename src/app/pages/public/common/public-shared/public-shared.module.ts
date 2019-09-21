import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/common/shared';
import { MatFormFieldModule, MatInputModule, MatProgressBarModule } from '@angular/material';
import { ValidationErrorModule } from 'src/app/pipes/validation-error';
const Modules = [
  SharedModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressBarModule,
  ValidationErrorModule
];

@NgModule({
  imports: [
    ...Modules
  ],
  exports: [
    ...Modules
  ]
})
export class PublicSharedModule { }
