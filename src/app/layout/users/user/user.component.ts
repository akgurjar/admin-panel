import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HeaderService } from 'src/app/layout/services/header/header.service';

@Component({
  selector: 'app-user',
  template: `
    <app-loader [isActivated]="route.isActivated">
      <router-outlet #route="outlet"></router-outlet>
    </app-loader>
  `
})
export class UserComponent implements OnInit {

  constructor(route: ActivatedRoute, hs: HeaderService) {
    console.log('user component');
    route.params.subscribe(({user}) => {
      // console.log()
      console.log(user);
      hs.replace(user, 'Ashish Gurjar');
    });
  }

  ngOnInit() {
  }

}
