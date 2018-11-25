import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss']
})
export class UserFilterComponent implements OnInit {

  constructor(private _dialogRef: MatDialogRef<UserFilterComponent>) { }

  ngOnInit() {
  }
  onCancelHandler() {
    this._dialogRef.close();
  }
}
