import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/common/shared';
import { MatFormFieldModule, MatInputModule, MatProgressBarModule } from '@angular/material';
import { ValidationErrorModule } from 'src/app/pipes/validation-error';
import { InputEmailModule } from 'src/app/common/input/pages/input-email';
import { InputPasswordModule } from 'src/app/common/input/pages/input-password';

const Modules = [
  SharedModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressBarModule,
  ValidationErrorModule,
  InputPasswordModule,
  InputEmailModule,
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
