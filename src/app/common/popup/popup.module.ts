import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './view/popup.component';
import { PopupService } from './services/popup.service';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [PopupComponent],
  imports: [CommonModule, SharedModule],
  providers: [PopupService],
})
export class PopupModule {}
