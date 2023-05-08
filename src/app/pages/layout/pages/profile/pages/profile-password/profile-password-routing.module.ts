import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePasswordComponent } from './view/profile-password.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePasswordRoutingModule {}
