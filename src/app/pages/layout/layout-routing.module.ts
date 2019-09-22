import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './view/layout.component';
import { PROFILE_ROUTE, USERS_ROUTE, REPORTS_ROUTE, CONTENTS_ROUTE } from './constants';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(modules => modules.DashboardModule)
      },
      {
        path: PROFILE_ROUTE.path,
        loadChildren: () => import('./pages/profile/profile.module').then(modules => modules.ProfileModule)
      },
      {
        path: USERS_ROUTE.path,
        loadChildren: () => import('./pages/users/users.module').then(modules => modules.UsersModule)
      },
      {
        path: REPORTS_ROUTE.path,
        loadChildren: () => import('./pages/reports/reports.module').then(modules => modules.ReportsModule)
      },
      {
        path: CONTENTS_ROUTE.path,
        loadChildren: () => import('./pages/content/content.module').then(modules => modules.ContentModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
