import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginComponent } from './view/login.component';
import { AuthComponent, SetupComponent, VerifyComponent } from './components';
import { MFA_SETUP_ROUTE, MFA_VERIFY_ROUTE } from '@public/constants';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AuthComponent,
      },
      {
        path: MFA_SETUP_ROUTE.path,
        component: SetupComponent,
      },
      {
        path: MFA_VERIFY_ROUTE.path,
        component: VerifyComponent,
        resolve: {
          token(route: ActivatedRouteSnapshot) {
            return route.queryParams['token'];
          },
          platform(route: ActivatedRouteSnapshot) {
            console.info('====>>>', route.queryParams['platform']);
            return route.queryParams['platform'];
          },
          remember(route: ActivatedRouteSnapshot) {
            return route.queryParams['remember'];
          },
        },
        data: {
          platform: '12',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
