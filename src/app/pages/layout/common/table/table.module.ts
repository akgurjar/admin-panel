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
import { LayoutSharedModule } from '../layout-shared';
import { TableComponent } from './view/table.component';
import { ForModule } from '../../directives/for';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    TableComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    LayoutSharedModule,
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
