import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './view/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/user-listing/user-listing.module').then(modules => modules.UserListingModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./pages/user-create/user-create.module').then(modules => modules.UserCreateModule)
      },
      {
        path: ':user',
        loadChildren: () => import('./pages/user/user.module').then(modules => modules.UserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
