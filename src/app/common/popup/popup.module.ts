import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PopupService } from './popup.service';

@NgModule({
  declarations: [PopupComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [
    PopupComponent
  ],
  providers: [
    PopupService
  ]
})
export class PopupModule { }
