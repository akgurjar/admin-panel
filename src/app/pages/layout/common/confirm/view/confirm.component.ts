import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  title = 'Confirm Box';
  message = 'Are you sure ?';
  constructor(
    private $dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData
  ) {
    this.title = data.title;
    this.message = data.message;
  }

  ngOnInit() {
  }
  onCloseHandler() {
    this.$dialogRef.close();
  }
  onCancelHandler() {
    this.$dialogRef.close(false);
  }
  onConfirmHandler() {
    this.$dialogRef.close(true);
  }
}
interface DialogData {
  title: string;
  message: string;
}
