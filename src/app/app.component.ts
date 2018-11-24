import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet #route="outlet">
    </router-outlet>
  `
})
export class AppComponent {}
