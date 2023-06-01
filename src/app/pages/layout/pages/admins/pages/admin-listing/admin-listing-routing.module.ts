import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListingComponent } from './view/admin-listing.component';

const routes: Routes = [
  {
    path: '',
    component: AdminListingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminListingRoutingModule {}
