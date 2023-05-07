import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './view/public.component';
import { LOGIN_ROUTE, FORGOT_ROUTE, RESET_ROUTE } from './constants';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: LOGIN_ROUTE.url,
      },
      {
        path: LOGIN_ROUTE.path,
        loadChildren: () =>
          import('./pages/login/login.module').then(
            (modules) => modules.LoginModule
          ),
      },
      {
        path: FORGOT_ROUTE.path,
        loadChildren: () =>
          import('./pages/forgot/forgot.module').then(
            (modules) => modules.ForgotModule
          ),
      },
      {
        path: RESET_ROUTE.path,
        loadChildren: () =>
          import('./pages/reset/reset.module').then(
            (modules) => modules.ResetModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
