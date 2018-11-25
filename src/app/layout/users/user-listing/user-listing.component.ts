import { Component, OnInit } from '@angular/core';
import { ListData, TableSource, TableColumn } from '@models';
import { UserFilterComponent } from './user-filter/user-filter.component';

const COLUMNS: TableColumn<any>[] = [
  {
    label: 'ID',
    name: 'id',
    sort: false,
    resolve(row) {
      return row['id'];
    }
  },
  {
    label: 'NAME',
    name: 'name',
    sort: false,
    resolve(row) {
      return row['name'];
    }
  },
  {
    label: 'EMAIL',
    name: 'email',
    sort: false,
    resolve(row) {
      return row['email'];
    }
  }
];

const USERS = [
  {
    id: '123',
    name: 'Test User',
    email: 'abc@xyz.com'
  },
  {
    id: '456',
    name: 'User',
    email: 'abc1@xyz.com'
  },
  {
    id: '789',
    name: 'User Test',
    email: 'abc2@xyz.com'
  }
];



@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {
  list: ListData = new ListData('Users List', {search: true, filter: UserFilterComponent});
  table: TableSource<any> = new TableSource(COLUMNS, USERS);
  constructor() {
  }

  ngOnInit() {
  }
  onEditHandler(row) {
    console.log(row);
  }
}
