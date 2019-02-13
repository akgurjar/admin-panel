import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-reset',
  templateUrl: './confirm-reset.component.html',
  styleUrls: ['./confirm-reset.component.scss']
})
export class ConfirmResetComponent implements OnInit {

  constructor(private _dialogRef: MatDialogRef<ConfirmResetComponent>) { }

  ngOnInit() {}
  onResetHandler() {
    this._dialogRef.close(true);
  }
  onDashboardHandler() {
    this._dialogRef.close(false);
  }
}
