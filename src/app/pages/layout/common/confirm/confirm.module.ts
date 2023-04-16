import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './confirm.component';
import { ConfirmService } from './confirm.service';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/common/shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, MatDialogModule],
  declarations: [ConfirmComponent],
  providers: [ConfirmService],
})
export class ConfirmModule {}
