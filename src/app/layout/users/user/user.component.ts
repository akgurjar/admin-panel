import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <app-loader [isActivated]="route.isActivated">
      <router-outlet #route="outlet"></router-outlet>
    </app-loader>
  `
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
