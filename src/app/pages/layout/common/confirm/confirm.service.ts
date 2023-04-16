import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from './confirm.component';
import { Observable } from 'rxjs';

@Injectable()
export class ConfirmService {
  constructor(private _dialog: MatDialog) {}
  popup({ title, message }: Options): Observable<boolean> {
    return this._dialog
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
