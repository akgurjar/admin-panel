import { Component, Inject } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import {
  CreateComponent,
  DetailComponent,
  UpdateComponent,
} from '../components';
import { lastValueFrom } from 'rxjs';

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
      this.onCreateHandler();
    });
    // this.openDialog();
  }
  async openDialog(Component: any, data?: unknown) {
    const dialog = this.dialog.open(Component, {
      maxWidth: '420px',
      width: '100%',
      height: '100%',
      position: {
        right: '0px',
      },
      data,
      autoFocus: false,
    });
    return lastValueFrom(dialog.afterClosed());
  }
  onCreateHandler() {
    this.openDialog(CreateComponent);
  }
  onViewHandler(id: string) {
    this.openDialog(DetailComponent, id);
  }
  onEditHandler(id: string) {
    this.openDialog(UpdateComponent, id);
  }
  onDeleteHandler(id: string) {
    this.openDialog(UpdateComponent, id);
  }
}
