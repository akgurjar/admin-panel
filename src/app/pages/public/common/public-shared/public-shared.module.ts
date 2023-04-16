import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/common/shared';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ValidationErrorModule } from 'src/app/pipes/validation-error';
const Modules = [
  SharedModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressBarModule,
  ValidationErrorModule,
];

@NgModule({
  imports: [...Modules],
  exports: [...Modules],
})
export class PublicSharedModule {}
