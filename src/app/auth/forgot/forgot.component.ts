import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { MAT_ERROR, CustomValidators } from '@form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  matError = MAT_ERROR;
  forgotForm: FormGroup;
  mailSentTo: string = null;
  constructor(
    fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) {
    this.forgotForm = fb.group({
      email: [null, [Validators.required, ...CustomValidators.email]]
    });
  }

  ngOnInit() {
  }
  onForgotMailHandler() {
    if (this.forgotForm.valid && this.forgotForm.enabled) {
      const { email } = this.forgotForm.value;
      this.forgotForm.disable();
      this._auth.forgot(email).then(() => {
        this.mailSentTo = email;
        this.forgotForm.enable();
      }).catch((error) => {
        this.forgotForm.enable();
        // this
      });
    }
  }
  onBackToLoginHandler() {
    const url = this._router.url;
    this._router.navigate([url.substr(0, url.lastIndexOf('/')), 'login']);
  }
}
