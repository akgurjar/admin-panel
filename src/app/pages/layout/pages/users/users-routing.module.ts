import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './view/users.component';
import { CREATE_USERS_ROUTE, USER_ROUTE } from './constants';

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
        path: CREATE_USERS_ROUTE.path,
        loadChildren: () => import('./pages/user-create/user-create.module').then(modules => modules.UserCreateModule)
      },
      {
        path: USER_ROUTE.path,
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
