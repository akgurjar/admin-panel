import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MAT_ERROR, CustomValidators } from '@form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  matError = MAT_ERROR;
  isPasswordVisible = false;
  loginForm: FormGroup;
  constructor(fb: FormBuilder, private _auth: AuthService, private _router: Router) {
    this.loginForm = fb.group({
      username: [null, [Validators.required, ...CustomValidators.email]],
      password: [null, CustomValidators.password],
      remember: [false, Validators.required]
    });
  }

  ngOnInit() {
  }
  onPasswordVisibilityHandler(event: MouseEvent) {
    event.stopPropagation();
    if (this.loginForm.enabled) {
      this.isPasswordVisible = !this.isPasswordVisible;
    }
  }
  onLoginHandler() {
    if (this.loginForm.valid && this.loginForm.enabled) {
      const { username, password, remember } = this.loginForm.value;
      console.log(username, password, remember);
      this.loginForm.disable();
      this._auth.login({username, password}, remember)
      .then((status) => {
        if (status) {
          this._router.navigateByUrl('/');
        } else {
          this.loginForm.enable();
        }
      }).catch((error) => {
        this.loginForm.enable();
        console.log(error);
      });
    }
  }
}
