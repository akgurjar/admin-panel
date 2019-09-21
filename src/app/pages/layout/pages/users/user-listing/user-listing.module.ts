import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListingRoutingModule } from './user-listing-routing.module';
import { UserListingComponent } from './user-listing.component';
import { UserListModule } from '../common/user-list';

@NgModule({
  declarations: [UserListingComponent],
  imports: [
    CommonModule,
    UserListingRoutingModule,
    UserListModule
  ]
})
export class UserListingModule { }
