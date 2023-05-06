import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PublicService } from '@app/pages/public/services/public.service';
import { Router } from '@angular/router';
import { CustomValidators } from '@app/constants/validation.constants';
import { FORGOT_ROUTE } from '@app/pages/public/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isPasswordVisible = false;
  readonly forgetPasswordUrl = FORGOT_ROUTE.url;
  readonly loginForm = this.$fb.nonNullable.group({
    email: ['', [Validators.required, ...CustomValidators.email]],
    password: ['', CustomValidators.password],
    remember: [false, Validators.required],
  });
  get emailControl() {
    return this.loginForm.controls.email;
  }
  get pwdControl() {
    return this.loginForm.controls.password;
  }
  constructor(
    private $fb: FormBuilder,
    private $public: PublicService,
    private $router: Router
  ) {}

  ngOnInit() {}
  onPasswordVisibilityHandler(event: MouseEvent) {
    event.stopPropagation();
    if (this.loginForm.enabled) {
      this.isPasswordVisible = !this.isPasswordVisible;
    }
  }
  onLoginHandler() {
    if (this.loginForm.valid && this.loginForm.enabled) {
      const { email, password, remember } = this.loginForm.getRawValue();
      // console.log(username, password, remember);
      this.loginForm.disable();
      this.$public
        .login(email, password, remember)
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loginForm.enable();
        });
    } else if (this.loginForm.enabled) {
      this.loginForm.markAllAsTouched();
    }
  }
}
