import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { LayoutSharedModule } from '../../common/layout-shared';

@NgModule({
  declarations: [ContentComponent],
  imports: [CommonModule, ContentRoutingModule, LayoutSharedModule],
})
export class ContentModule {}
