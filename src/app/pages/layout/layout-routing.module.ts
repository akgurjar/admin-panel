import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './view/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      // {
      //   path: 'profile',
      //   loadChildren: () =>
      //     import('./pages/profile/profile.module').then((m) => m.ProfileModule),
      // },
      // {
      //   path: 'users',
      //   loadChildren: () =>
      //     import('./pages/users/users.module').then((m) => m.UsersModule),
      // },
      {
        path: 'reports',
        loadChildren: () =>
          import('./pages/reports/reports.module').then((m) => m.ReportsModule),
      },
      {
        path: 'content',
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
