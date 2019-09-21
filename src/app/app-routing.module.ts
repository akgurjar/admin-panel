import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PUBLIC_ROUTE, LAYOUT_ROUTE } from './constants';
import { PublicGuard, LayoutGuard } from './guards';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: PUBLIC_ROUTE.path
  },
  {
    path: PUBLIC_ROUTE.path,
    canLoad: [PublicGuard],
    canActivate: [PublicGuard],
    loadChildren: () => import('./pages/public/public.module').then(modules => modules.PublicModule)
  },
  {
    path: LAYOUT_ROUTE.path,
    canLoad: [LayoutGuard],
    canActivate: [LayoutGuard],
    loadChildren: () => import('./pages/layout/layout.module').then(modules => modules.LayoutModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(modules => modules.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
