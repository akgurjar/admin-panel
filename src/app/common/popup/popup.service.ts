import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { PopupComponent } from './popup.component';

@Injectable()
export class PopupService {

  constructor(private _snackBar: MatSnackBar) { }
  open(message: string, type: 'ERROR' | 'SUCCESS' | 'DEFAULT' = 'DEFAULT', config: MatSnackBarConfig) {
    this._snackBar.openFromComponent(PopupComponent, {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      data: { message, type },
      ...config
    });
  }
}
