import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatCheckboxModule
} from '@angular/material';
import { SharedModule } from '../../shared/shared.module';
import { TableComponent } from './table.component';
import { ForModule } from '../for';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatCheckboxModule,
    ForModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
