import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule as LayoutSharedModule } from '../../shared/shared.module';
import { ForModule } from '../for';
import {
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatDialogModule
} from '@angular/material';
import { ListingComponent } from './listing.component';

@NgModule({
  declarations: [
    ListingComponent
  ],
  imports: [
    CommonModule,
    LayoutSharedModule,
    ForModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  exports: [
    ListingComponent,
    ForModule
  ]
})
export class ListingModule { }
