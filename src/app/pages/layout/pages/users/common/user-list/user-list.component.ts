import { Component, OnInit, Input } from '@angular/core';
import { UserTableSource } from './user-list.model';
import { Router } from '@angular/router';
import { UserListService } from './user-list.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  tableSource: Table.Source<any> = new UserTableSource(null);
  isLoading = false;
  constructor(private _userList: UserListService, private _router: Router) {
    this._userList.changes.subscribe((result) => {
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
    this._updateData(params);
  }
  private _updateData(params = null) {
    this._userList.next(params).then(console.log).catch(console.log);
  }
}
