import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { PopupComponent } from '../view/popup.component';

@Injectable()
export class PopupService {

  constructor(private $snackBar: MatSnackBar) { }
  open(message: string, type: 'WARNING' | 'ERROR' | 'SUCCESS' | 'DEFAULT' = 'DEFAULT', config: MatSnackBarConfig = {}) {
    console.log(message);
    this.$snackBar.openFromComponent(PopupComponent, {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      data: { message, type },
      duration: 3000,
      ...config
    });
  }
  success(message: string, config?: MatSnackBarConfig) {
    this.open(message, 'SUCCESS', config);
  }
  warn(message: string, config?: MatSnackBarConfig) {
    this.open(message, 'WARNING', config);
  }
  error(message: string, config?: MatSnackBarConfig) {
    this.open(message, 'ERROR', config);
  }
  show(message: string, config?: MatSnackBarConfig) {
    this.open(message, 'DEFAULT', config);
  }
}
