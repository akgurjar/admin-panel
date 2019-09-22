import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './view/user-form.component';

@NgModule({
  declarations: [UserFormComponent],
  imports: [
    CommonModule
  ],
  exports: [UserFormComponent]
})
export class UserFormModule { }
