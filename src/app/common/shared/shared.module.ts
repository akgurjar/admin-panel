import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';

const Modules = [
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatDialogModule,
  ReactiveFormsModule,
  MatNativeDateModule,
];

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, ...Modules],
  exports: [...Modules, LoaderComponent],
})
export class SharedModule {}
