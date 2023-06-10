import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './view/admins.component';
import {
  ACCOUNTS_ROUTE,
  PERMISSIONS_ROUTE,
  ROLES_ROUTE,
} from '@layout/constants';

const routes: Routes = [
  {
    path: '',
    component: AdminsComponent,
    children: [
      {
        path: ACCOUNTS_ROUTE.path,
        loadChildren: () =>
          import('./pages/accounts/accounts.module').then(
            (m) => m.AccountsModule
          ),
      },
      {
        path: ROLES_ROUTE.path,
        loadChildren: () =>
          import('./pages/roles/roles.module').then((m) => m.RolesModule),
      },
      {
        path: PERMISSIONS_ROUTE.path,
        loadChildren: () =>
          import('./pages/permissions/permissions.module').then(
            (m) => m.PermissionsModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/admin-listing/admin-listing.module').then(
            (m) => m.AdminListingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminsRoutingModule {}
