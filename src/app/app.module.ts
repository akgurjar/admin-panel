import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './view/app.component';
import { SharedModule } from './common/shared/shared.module';
import { PopupModule } from 'src/app/common/popup';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { ConfirmResetComponent } from './components/confirm-reset';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmResetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    PopupModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmResetComponent
  ]
})
export class AppModule { }
