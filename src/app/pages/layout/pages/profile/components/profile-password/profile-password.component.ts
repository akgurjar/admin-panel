import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'src/app/constants';

@Component({
  selector: 'app-profile-password',
  templateUrl: './profile-password.component.html',
  styleUrls: ['./profile-password.component.scss']
})
export class ProfilePasswordComponent implements OnInit {
  formGroup: FormGroup;
  get oldPassword(): FormControl {
    return this.formGroup.controls.oldPassword as FormControl;
  }
  get newPassword(): FormControl {
    return this.formGroup.controls.newPassword as FormControl;
  }
  get confirmPassword(): FormControl {
    return this.formGroup.controls.confirmPassword as FormControl;
  }
  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      oldPassword: [null, [Validators.required, ...CustomValidators.password]],
      newPassword: [null, [Validators.required, ...CustomValidators.password]],
      confirmPassword: [null, [Validators.required, ...CustomValidators.password, CustomValidators.match('newPassword')]],
    });
    const { newPassword, confirmPassword } = this.formGroup.controls;
    newPassword.valueChanges.subscribe(() => {
      confirmPassword.updateValueAndValidity();
    });
  }

  ngOnInit() {
  }

}
