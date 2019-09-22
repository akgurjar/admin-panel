import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSharedModule } from '../../common';
import { InputNameComponent } from './view/input-name.component';



@NgModule({
  declarations: [InputNameComponent],
  imports: [
    CommonModule,
    InputSharedModule
  ],
  exports: [InputNameComponent]
})
export class InputNameModule { }
