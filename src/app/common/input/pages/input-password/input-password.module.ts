import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSharedModule } from '../../common';
import { InputPasswordComponent } from './view/input-password.component';



@NgModule({
  declarations: [InputPasswordComponent],
  imports: [
    CommonModule,
    InputSharedModule
  ],
  exports: [InputPasswordComponent]
})
export class InputPasswordModule { }
