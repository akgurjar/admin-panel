import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PublicService } from '@public/services/public.service';
import { CustomValidators } from '@constants/validation.constants';
import { FORGOT_ROUTE } from '@public/constants';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
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
  constructor(private $fb: FormBuilder, private $public: PublicService) {}

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
        .auth(email, password, remember)
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