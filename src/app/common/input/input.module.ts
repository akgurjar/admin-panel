import { NgModule } from '@angular/core';

import {
  InputEmailModule,
  InputNameModule,
  InputPasswordModule,
} from './pages';

const Modules = [
  InputEmailModule,
  InputNameModule,
  InputPasswordModule,
];

@NgModule({
  imports: Modules,
  exports: Modules
})
export class InputModule { }
