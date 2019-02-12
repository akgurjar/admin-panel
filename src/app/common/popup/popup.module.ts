import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';
import { MatIconModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [PopupComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  entryComponents: [
    PopupComponent
  ],
  providers: [
    PopupService
  ]
})
export class PopupModule { }
