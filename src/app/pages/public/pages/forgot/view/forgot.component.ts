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
  forgotForm!: FormGroup;
  mailSentTo: string = '';
  constructor(
    fb: FormBuilder,
    private $public: PublicService,
    private $router: Router
  ) {
    this.forgotForm = fb.group({
      email: [null, [Validators.required, ...CustomValidators.email]],
    });
  }

  ngOnInit() {}
  onForgotMailHandler() {
    if (this.forgotForm.valid && this.forgotForm.enabled) {
      const { email } = this.forgotForm.value;
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
    }
  }
  onBackToLoginHandler() {
    const url = this.$router.url;
    this.$router.navigate([url.substr(0, url.lastIndexOf('/')), 'login']);
  }
}
