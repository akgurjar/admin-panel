import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatDialogModule
} from '@angular/material';
import { SharedModule } from '../../shared/shared.module';
import { TableComponent } from './table.component';
import { ForModule } from '../for';
import { TableContainerComponent } from './table-container/table-container.component';

@NgModule({
  declarations: [
    TableComponent,
    TableContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule,
    ForModule
  ],
  exports: [
    TableComponent,
    TableContainerComponent
  ]
})
export class TableModule { }
