import { Component, OnInit } from '@angular/core';
import { LIST_CONFIG, UserTableSource } from './user-list.model';
import { UserListService } from './user-list.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  listingConfig: Listing.Config = LIST_CONFIG;
  tableSource: Table.Source<any> = new UserTableSource([]);
  constructor(private _userList: UserListService, private _router: Router) {
    _userList.changes.subscribe((data: any[]) => {
      this.tableSource = new UserTableSource(data);
    });
  }

  ngOnInit() {
  }
  onCreateUser() {
    this._router.navigateByUrl('/users/create');
  }
}
