import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule as RootSharedModule } from '../../shared/shared.module';
import {
  MatToolbarModule,
  MatRippleModule,
  MatMenuModule,
  MatSidenavModule,
  MatBadgeModule,
  MatCardModule,
  MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import { TableComponent } from './components/table/table.component';


const Modules = [
  RootSharedModule,
  MatToolbarModule,
  MatRippleModule,
  MatMenuModule,
  MatSidenavModule,
  MatBadgeModule,
  MatCardModule,
  MatPaginatorModule,
  MatTableModule
];

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    ...Modules
  ],
  exports: [
    ...Modules,
    TableComponent
  ]
})
export class SharedModule { }
