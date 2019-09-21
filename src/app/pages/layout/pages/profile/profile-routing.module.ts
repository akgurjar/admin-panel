import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'details'
      },
      {
        path: 'details',
        loadChildren: './profile-details/profile-details.module#ProfileDetailsModule'
      },
      {
        path: 'update',
        loadChildren: './profile-update/profile-update.module#ProfileUpdateModule'
      },
      {
        path: 'password',
        loadChildren: './profile-password/profile-password.module#ProfilePasswordModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
