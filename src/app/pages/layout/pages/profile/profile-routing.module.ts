import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './view/profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'details',
      },
      {
        path: 'details',
        loadChildren: () =>
          import('./pages/profile-details/profile-details.module').then(
            (m) => m.ProfileDetailsModule
          ),
      },
      {
        path: 'update',
        loadChildren: () =>
          import('./pages/profile-update/profile-update.module').then(
            (m) => m.ProfileUpdateModule
          ),
      },
      {
        path: 'password',
        loadChildren: () =>
          import('./pages/profile-password/profile-password.module').then(
            (m) => m.ProfilePasswordModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
