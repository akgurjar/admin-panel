import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule as LayoutSharedModule } from '../../shared/shared.module';


const Modules = [
  LayoutSharedModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...Modules
  ],
  exports: [
    ...Modules
  ]
})
export class SharedModule { }
