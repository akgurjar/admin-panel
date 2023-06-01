import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { AdminsComponent } from './view/admins.component';
import { SharedModule } from '@layout/common/shared';

@NgModule({
  declarations: [AdminsComponent],
  imports: [CommonModule, AdminsRoutingModule, SharedModule],
})
export class AdminsModule {}
