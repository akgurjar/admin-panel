import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
  title = 'Confirm Box';
  message = 'Are you sure ?';
  constructor(
    private _dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData
  ) {
    this.title = data.title;
    this.message = data.message;
  }

  ngOnInit() {}
  onCloseHandler() {
    this._dialogRef.close();
  }
  onCancelHandler() {
    this._dialogRef.close(false);
  }
  onConfirmHandler() {
    this._dialogRef.close(true);
  }
}
interface DialogData {
  title: string;
  message: string;
}
