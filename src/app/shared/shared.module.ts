import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatNativeDateModule
} from '@angular/material';
import { LoaderComponent } from './components/loader/loader.component';
import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const Modules = [
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
  MatTooltipModule,
  ReactiveFormsModule,
  HttpClientModule,
  MatNativeDateModule
];

@NgModule({
  declarations: [
    LoaderComponent
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
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ]
})
export class SharedModule { }
