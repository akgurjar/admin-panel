import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatNativeDateModule,
  MatDialogModule
} from '@angular/material';
import { LoaderComponent } from './components/loader/loader.component';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmResetComponent } from './components/confirm-reset/confirm-reset.component';

const Modules = [
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatDialogModule,
  ReactiveFormsModule,
  HttpClientModule,
  MatNativeDateModule
];

@NgModule({
  declarations: [
    LoaderComponent,
    ConfirmResetComponent
  ],
  imports: [
    CommonModule,
    ...Modules
  ],
  exports: [
    ...Modules,
    LoaderComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  entryComponents: [
    ConfirmResetComponent
  ]
})
export class SharedModule { }
