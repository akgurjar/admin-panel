import { Component, OnInit } from '@angular/core';
import { TableSource, TableColumn } from '@models';


const USERS = [
  {
    id: '123',
    name: 'Test User',
    email: 'abc@xyz.com'
  }
];



@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {
  source: TableSource<any>;
  constructor() {
    this.source = new TableSource(
      [
        new TableColumn('ID', 'id', (row) => row.id),
        new TableColumn('NAME', 'name', (row) => row.name),
        new TableColumn('EMAIL', 'email', (row) => row.email),
      ],
      USERS
    );
  }

  ngOnInit() {
  }
}
