import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './view/not-found.component';
import { SharedModule } from 'src/app/common/shared/shared.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    SharedModule
  ]
})
export class NotFoundModule { }
