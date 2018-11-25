import { Component } from '@angular/core';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  template: `
    <app-loader [isActivated]="route.isActivated" style="height: 100%">
      <router-outlet #route="outlet"></router-outlet>
    </app-loader>
  `
})
export class AppComponent {
  routes = routes;
}
