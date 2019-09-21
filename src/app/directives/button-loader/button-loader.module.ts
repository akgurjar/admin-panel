import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonLoaderDirective } from './button-loader.directive';

@NgModule({
  declarations: [ButtonLoaderDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonLoaderDirective
  ]
})
export class ButtonLoaderModule { }
