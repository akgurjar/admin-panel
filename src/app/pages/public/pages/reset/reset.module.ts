import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetRoutingModule } from './reset-routing.module';
import { ResetComponent } from './view/reset.component';
import { PublicSharedModule } from '@public/common';

@NgModule({
  declarations: [ResetComponent],
  imports: [CommonModule, ResetRoutingModule, PublicSharedModule],
})
export class ResetModule {}
