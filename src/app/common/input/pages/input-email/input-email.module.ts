import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSharedModule } from '../../common';
import { InputEmailComponent } from './view/input-email.component';



@NgModule({
  declarations: [InputEmailComponent],
  imports: [
    CommonModule,
    InputSharedModule
  ],
  exports: [InputEmailComponent]
})
export class InputEmailModule { }
