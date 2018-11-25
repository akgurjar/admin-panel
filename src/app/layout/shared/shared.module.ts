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
  MatTableModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { TableComponent } from './components/table/table.component';
import { ListingComponent } from './components/listing/listing.component';
import { ForDirective } from './directives/for.directive';


const Modules = [
  RootSharedModule,
  MatToolbarModule,
  MatRippleModule,
  MatMenuModule,
  MatSidenavModule,
  MatBadgeModule,
  MatCardModule,
  MatPaginatorModule,
  MatTableModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  declarations: [
    TableComponent,
    ListingComponent,
    ForDirective
  ],
  imports: [
    CommonModule,
    ...Modules
  ],
  exports: [
    ...Modules,
    TableComponent,
    ListingComponent,
    ForDirective
  ]
})
export class SharedModule { }
