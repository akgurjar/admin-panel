import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListingRoutingModule } from './user-listing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserListingComponent } from './user-listing.component';

@NgModule({
  declarations: [
    UserListingComponent
  ],
  imports: [
    CommonModule,
    UserListingRoutingModule,
    SharedModule
  ]
})
export class UserListingModule { }
