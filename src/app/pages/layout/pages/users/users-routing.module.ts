import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        loadChildren: './user-listing/user-listing.module#UserListingModule'
      },
      {
        path: 'create',
        loadChildren: './user-create/user-create.module#UserCreateModule'
      },
      {
        path: ':user',
        loadChildren: './user/user.module#UserModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
