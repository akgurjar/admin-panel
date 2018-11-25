import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <app-loader [isActivated]="route.isActivated">
      <router-outlet #route="outlet"></router-outlet>
    </app-loader>
  `
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
