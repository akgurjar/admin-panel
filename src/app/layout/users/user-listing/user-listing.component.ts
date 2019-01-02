import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {
  result: ListingResult<any> = {
    pageIndex: 0,
    pageSize: 10,
    length: 0,
    data: []
  };
  constructor(
    private _users: UsersService
  ) {
    this._users.changes.subscribe(result => this.result = result);
    this._users.fetch();
  }

  ngOnInit() {
  }

}
