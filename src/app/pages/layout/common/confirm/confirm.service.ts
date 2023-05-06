import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from './confirm.component';
import { Observable } from 'rxjs';

@Injectable()
export class ConfirmService {
  constructor(private $dialog: MatDialog) {}
  popup({ title, message }: Options): Observable<boolean> {
    return this.$dialog
      .open(ConfirmComponent, {
        data: {
          title: title || 'Confirm',
          message,
        },
        disableClose: true,
        autoFocus: false,
      })
      .afterClosed();
  }
}

interface Options {
  title?: string;
  message: string;
}
