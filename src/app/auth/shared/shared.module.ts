import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { SharedModule as RootSharedModule } from '../../shared/shared.module';
import { MatFormFieldModule, MatInputModule, MatProgressBarModule } from '@angular/material';
const Modules = [
  RootSharedModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule
];

@NgModule({
  imports: [
    ...Modules
  ],
  exports: [
    ...Modules
  ],
  providers: [
    AuthService
  ]
})
export class SharedModule { }
