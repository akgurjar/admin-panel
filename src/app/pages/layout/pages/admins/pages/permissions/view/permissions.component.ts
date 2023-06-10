import { Component, Inject } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from '../components';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss'],
})
export class PermissionsComponent {
  displayedColumns: string[] = [
    'id',
    'title',
    'createdAt',
    'blockedAt',
    'actions',
  ];
  dataSource: unknown[] = [];
  constructor(
    public readonly adminService: AdminService,
    public readonly dialog: MatDialog
  ) {
    adminService.permissions().then((result) => {
      this.dataSource = result.data;
    });
    this.openDialog();
  }
  openDialog() {
    this.dialog
      .open(DetailComponent, {
        maxWidth: '420px',
        width: '100%',
        height: '100%',
        position: {
          right: '0px',
        },
        // scrollStrategy: null,
      })
      .afterClosed()
      .subscribe(() => {
        //
      });
  }
}
