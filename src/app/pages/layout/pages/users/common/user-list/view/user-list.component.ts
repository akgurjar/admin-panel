import { Component, OnInit } from '@angular/core';
import { UserTableSource } from '../models/user-list.model';
import { Router } from '@angular/router';
import { UserListService } from '../services/user-list.service';
import * as Table from 'src/app/pages/layout/common/table/interfaces';
import { USER_DATA } from '../constants';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  tableSource: Table.Source<any> = new UserTableSource(USER_DATA, {total: USER_DATA.length, pageSize: 10, pageIndex: 0});
  isLoading = false;
  constructor(private $userList: UserListService, private $router: Router) {
    this.$userList.changes.subscribe((result) => {
      if (result) {
        const {data, ...options} = result;
        this.isLoading = false;
        this.tableSource = new UserTableSource(data, options);
      }
    });
    this._updateData();
  }

  ngOnInit() {
  }
  onCreateUser() {
    this.$router.navigateByUrl('/users/create');
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
      params.searchText = data.searchText;
    }
    if (data.filterData) {
      Object.keys(data.filterData).forEach((key) => {
        if (data.filterData[key]) {
          params[key] = data.filterData[key];
        }
      });
    }
    this._updateData(params);
  }
  private _updateData(params = null) {
    this.$userList.next(params).then(console.log).catch(console.log);
  }
}
