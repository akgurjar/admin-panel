import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule
} from '@angular/material';
import { LoaderComponent } from './components/loader/loader.component';
import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const Modules = [
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
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
