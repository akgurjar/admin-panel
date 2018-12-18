import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  forgotForm: FormGroup;
  constructor(fb: FormBuilder, private _auth: AuthService) {
    this.forgotForm = fb.group({
      email: [null, Validators.required]
    });
  }

  ngOnInit() {
  }
  onForgotMailHandler() {
    if (this.forgotForm.valid && this.forgotForm.enabled) {
      const { email } = this.forgotForm.value;
      this.forgotForm.disable();
      this._auth.forgot(email).catch((error) => {
        console.log(error);
        this.forgotForm.enable();
      });
    }
  }
}
