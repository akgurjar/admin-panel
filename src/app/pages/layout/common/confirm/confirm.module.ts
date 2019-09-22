import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './view/confirm.component';
import { ConfirmService } from './services/confirm.service';
import { MatDialogModule } from '@angular/material';
import { SharedModule } from 'src/app/common/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule
  ],
  declarations: [
    ConfirmComponent
  ],
  providers: [
    ConfirmService
  ],
  entryComponents: [
    ConfirmComponent
  ]
})
export class ConfirmModule { }
