import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicService } from '../../../services/public.service';
import { CustomValidators } from 'src/app/constants/validation.constants';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
  forgotForm = this.$fb.nonNullable.group({
    email: ['', [Validators.required, ...CustomValidators.email]],
  });
  mailSentTo: string = '';
  get emailControl() {
    return this.forgotForm.controls.email;
  }
  constructor(
    private $fb: FormBuilder,
    private $public: PublicService,
    private $router: Router
  ) {}

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
  onBackToLoginHandler() {
    const url = this.$router.url;
    this.$router.navigate([url.substr(0, url.lastIndexOf('/')), 'login']);
  }
}
