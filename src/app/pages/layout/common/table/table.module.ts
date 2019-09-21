import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSortModule
} from '@angular/material';
import { SharedModule } from '../../shared/shared.module';
import { TableComponent } from './table.component';
import { ForModule } from '../for';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    TableComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatDialogModule,
    ForModule
  ],
  exports: [
    TableComponent,
    FilterComponent,
    ForModule
  ],
  entryComponents: [
    FilterComponent
  ]
})
export class TableModule { }
