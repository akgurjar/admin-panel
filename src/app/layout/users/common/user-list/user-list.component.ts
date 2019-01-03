import { Component, OnInit, Input } from '@angular/core';
import { UserTableSource } from './user-list.model';
import { Router } from '@angular/router';
import { UsersService } from '../../users.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  tableSource: Table.Source<any> = new UserTableSource([]);
  @Input('result')
  set _data({data, length, pageIndex, pageSize}: ListingResult<any>) {
    this.isLoading = false;
    this.tableSource = new UserTableSource(data, {
      length,
      pageIndex,
      pageSize
    });
  }
  isLoading = false;
  constructor(private _users: UsersService, private _router: Router) {

  }

  ngOnInit() {
  }
  onCreateUser() {
    this._router.navigateByUrl('/users/create');
  }
  onArchiveHandler(id: string) {}
  onDeleteHandler(id: string) {}
  onBlockChangeHandler(id: string, status: number) {}
  onChangeHandler({data}: Table.OptionEvent) {
    this.isLoading = true;
    const params: any = {
      pageIndex: data.pageIndex,
      pageSize: data.pageSize
    };
    if (data.searchText) {
      params['searchText'] = data.searchText;
    }
    if (data.filterData) {
      Object.keys(data.filterData).forEach((key) => {
        if (data.filterData[key]) {
          params[key] = data.filterData[key];
        }
      });
    }
    this._users.fetch(params);
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 5000);
  }
}
