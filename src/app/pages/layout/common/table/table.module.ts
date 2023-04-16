import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '@app/common/shared/shared.module';
import { TableComponent } from './table.component';
import { ForModule } from '../for';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [TableComponent, FilterComponent],
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
    ForModule,
  ],
  exports: [TableComponent, FilterComponent, ForModule],
})
export class TableModule {}
