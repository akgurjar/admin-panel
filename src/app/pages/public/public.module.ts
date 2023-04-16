import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './view/public.component';
import { PublicService } from './services/public.service';
import { PublicSharedModule } from './common';

@NgModule({
  declarations: [PublicComponent],
  imports: [CommonModule, PublicRoutingModule, PublicSharedModule],
  providers: [PublicService],
})
export class PublicModule {}
