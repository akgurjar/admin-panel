import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminListingRoutingModule } from './admin-listing-routing.module';
import { AdminListingComponent } from './view/admin-listing.component';
import { SharedModule } from '@layout/common/shared';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AdminListingComponent],
  imports: [
    CommonModule,
    AdminListingRoutingModule,
    SharedModule,
    MatTableModule,
  ],
})
export class AdminListingModule {}
