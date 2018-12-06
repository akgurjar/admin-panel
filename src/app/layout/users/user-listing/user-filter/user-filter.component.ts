import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss']
})
export class UserFilterComponent implements OnInit {
  filterForm: FormGroup;
  @ViewChild('formElement') _formRef: ElementRef<HTMLFormElement>;
  constructor(
    private _dialogRef: MatDialogRef<UserFilterComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    fb: FormBuilder
  ) {
    this.filterForm = fb.group({
      createdFrom: [data && typeof data === 'object' ? data.createdFrom : null],
      createdTo: [data && typeof data === 'object' ? data.createdTo : null],
      status: [data && typeof data === 'object' ? data.status : null]
    });
  }

  ngOnInit() {
  }
  onResetHandler() {
    this._formRef.nativeElement.reset();
  }
  onApplyHandler() {
    if (this.filterForm.valid) {
      this._dialogRef.close(this.filterForm.value);
    }
  }
}
