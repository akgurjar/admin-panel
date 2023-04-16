import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss'],
})
export class UserFilterComponent implements OnInit {
  filterForm: FormGroup;
  readonly now: Date = new Date();
  constructor(
    fb: FormBuilder,
    private _dialogRef: MatDialogRef<UserFilterComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.filterForm = fb.group({
      createdFrom: [data ? data.createdFrom : null],
      createdTo: [data ? data.createdTo : null],
      status: [data ? data.status : null],
    });
  }

  ngOnInit() {}
  onResetHandler() {
    this.filterForm.reset({ emitEvent: false });
  }
  onApplyHandler() {
    if (this.filterForm.valid) {
      this._dialogRef.close(this.filterForm.value);
    }
  }
  onCancelHandler() {
    this._dialogRef.close();
  }
}
