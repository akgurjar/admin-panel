import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './view/layout.component';
import {
  CONTENT_ROUTE,
  DASHBOARD_ROUTE,
  PROFILE_ROUTE,
  REPORTS_ROUTE,
  ADMINS_ROUTE,
} from './constants';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: DASHBOARD_ROUTE.path,
      },
      {
        path: DASHBOARD_ROUTE.path,
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: PROFILE_ROUTE.path,
        loadChildren: () =>
          import('./pages/profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: ADMINS_ROUTE.path,
        loadChildren: () =>
          import('./pages/admins/admins.module').then((m) => m.AdminsModule),
      },
      {
        path: REPORTS_ROUTE.path,
        loadChildren: () =>
          import('./pages/reports/reports.module').then((m) => m.ReportsModule),
      },
      {
        path: CONTENT_ROUTE.path,
        loadChildren: () =>
          import('./pages/content/content.module').then((m) => m.ContentModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
