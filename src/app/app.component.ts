import { Component } from '@angular/core';
import { Router, NavigationError } from '@angular/router';
import { PopupService } from '@popup';

@Component({
  selector: 'app-root',
  template: `
    <app-loader [isActivated]="route.isActivated" style="height: 100%">
      <router-outlet #route="outlet"></router-outlet>
    </app-loader>
  `
})
export class AppComponent {
  constructor(router: Router, popup: PopupService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationError) {
        if (event.error['type'] === 'error') {
          popup.open('Server is not responding !', 'ERROR', {
            duration: 5000
          });
        }
      }
    });
  }
}
