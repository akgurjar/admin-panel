import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { DashboardGuard } from './shared/guards/dashboard/dashboard.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'auth',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'dashboard',
    canActivate: [DashboardGuard],
    canLoad: [DashboardGuard],
    loadChildren: './layout/layout.module#LayoutModule'
  },
  {
    path: '**',
    loadChildren: './not-found/not-found.module#NotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
