import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() apply: EventEmitter<void> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter();
  constructor(private _dialogRef: MatDialogRef<any>) {}

  ngOnInit() {}
  onCloseHandler() {
    this._dialogRef.close();
  }
}
