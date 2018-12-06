import { Component, OnInit } from '@angular/core';
import { ListData, TableSource, TableColumn } from '@models';
import { UserFilterComponent } from './user-filter/user-filter.component';

const COLUMNS: TableColumn<any>[] = [
  {
    label: 'NAME',
    key: 'name',
    sort: false,
    resolve(row) {
      return row['name'];
    },
    templateBy: 'user'
  },
  {
    label: 'EMAIL',
    key: 'email',
    sort: false,
    resolve(row) {
      return row['email'];
    }
  },
  {
    label: 'CREATED_ON',
    key: 'createdOn',
    sort: false,
    resolve(row) {
      return row['createdOn'];
    }
  },
  {
    label: 'ACTIONS',
    key: 'actions',
    sort: false,
    templateBy: 'table-actions'
  }
];

const USERS = [
  {
    id: '123',
    name: 'Test User',
    email: 'abc@xyz.com',
    createdOn: new Date().toISOString()
  },
  {
    id: '456',
    name: 'User',
    email: 'abc1@xyz.com',
    createdOn: new Date().toISOString()
  },
  {
    id: '789',
    name: 'User Test',
    email: 'abc2@xyz.com',
    createdOn: new Date().toISOString()
  }
];



@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {
  list: ListData = new ListData('Users List', {search: true, filter: UserFilterComponent});
  table: TableSource<any> = new TableSource(COLUMNS, USERS, {selection: true});
  selection: any[] = [];
  constructor() {
  }

  ngOnInit() {
  }
  onEditHandler(row) {
    console.log(row);
  }
  onSelectionHandler(selection) {
    console.log(selection);
    this.selection = selection;
  }
}
