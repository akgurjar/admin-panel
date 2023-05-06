import { NgModule } from '@angular/core';
import { PopupModule } from '@app/common/popup';
import { SharedModule } from '@app/common/shared';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ValidationErrorModule } from '@app/pipes/validation-error';
const Modules = [
  SharedModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressBarModule,
  ValidationErrorModule,
  PopupModule,
];

@NgModule({
  imports: [...Modules],
  exports: [...Modules],
})
export class PublicSharedModule {}
