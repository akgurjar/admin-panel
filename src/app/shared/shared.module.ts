import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule
} from '@angular/material';

const Modules = [
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule
];

@NgModule({
  imports: [
    ...Modules
  ],
  exports: [
    ...Modules
  ]
})
export class SharedModule { }
