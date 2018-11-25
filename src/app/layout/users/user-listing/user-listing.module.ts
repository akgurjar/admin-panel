import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListingRoutingModule } from './user-listing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserListingComponent } from './user-listing.component';
import { UserFilterComponent } from './user-filter/user-filter.component';

@NgModule({
  declarations: [
    UserListingComponent,
    UserFilterComponent
  ],
  imports: [
    CommonModule,
    UserListingRoutingModule,
    SharedModule
  ],
  entryComponents: [UserFilterComponent]
})
export class UserListingModule { }
