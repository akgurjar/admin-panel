import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserViewComponent } from './user-view/user-view.component';
import { UserUpdateComponent } from './user-update/user-update.component';


const routes: Routes = [
  {
    path: '',
    component: UserViewComponent
  },
  {
    path: 'update',
    component: UserUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
