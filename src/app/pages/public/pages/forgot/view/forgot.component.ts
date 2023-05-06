import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PublicService } from '@public/services/public.service';
import { CustomValidators } from '@constants/validation.constants';
import { LOGIN_ROUTE } from '@public/constants';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
  readonly loginUrl = LOGIN_ROUTE.url;
  forgotForm = this.$fb.nonNullable.group({
    email: ['', [Validators.required, ...CustomValidators.email]],
  });
  mailSentTo: string = '';
  get emailControl() {
    return this.forgotForm.controls.email;
  }
  constructor(private $fb: FormBuilder, private $public: PublicService) {}

  ngOnInit() {}
  onForgotMailHandler() {
    if (this.forgotForm.valid && this.forgotForm.enabled) {
      const { email } = this.forgotForm.getRawValue();
      this.forgotForm.disable();
      this.$public
        .forgot(email)
        .then(() => {
          this.mailSentTo = email;
          this.forgotForm.enable();
        })
        .catch((error) => {
          this.forgotForm.enable();
          // this
        });
    } else if (this.forgotForm.enabled) {
      this.forgotForm.markAllAsTouched();
    }
  }
}
