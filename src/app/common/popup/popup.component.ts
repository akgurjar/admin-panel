import { Component, OnInit, Inject, HostBinding } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @HostBinding('class.success-snack')
  get isSucccess() {
    return this._data.type === 'SUCCESS';
  }
  @HostBinding('class.error-snack')
  get isError() {
    return this._data.type === 'ERROR';
  }
  @HostBinding('class.default-snack')
  get isDefault() {
    return this._data.type === 'DEFAULT';
  }
  get message(): string {
    return this._data['message'];
  }
  get icon(): string {
    if (this.isError) {
      return 'warning';
    } else if (this.isSucccess) {
      return 'check';
    } else {
      return '';
    }
  }
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) private _data: any,
    private _snackBarRef: MatSnackBarRef<PopupComponent>
  ) {

  }

  ngOnInit() {
  }
  onCloseHandler() {
    this._snackBarRef.dismiss();
  }

}
