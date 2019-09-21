import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatNativeDateModule,
  MatDialogModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';

const Modules = [
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatDialogModule,
  ReactiveFormsModule,
  MatNativeDateModule
];

@NgModule({
  declarations: [
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    ...Modules
  ],
  exports: [
    ...Modules,
    LoaderComponent
  ]
})
export class SharedModule { }
