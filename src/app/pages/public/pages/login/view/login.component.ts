import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PublicService } from '../../../services/public.service';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/constants/validation.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isPasswordVisible = false;
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
        .then((status) => {
          // console.log(status);
          if (status) {
            this.$router.navigateByUrl('/');
          } else {
            this.loginForm.enable();
          }
        })
        .catch((error) => {
          this.loginForm.enable();
          console.log(error);
        });
    } else if (this.loginForm.enabled) {
      this.loginForm.markAllAsTouched();
    }
  }
  onForgotPasswordHandler() {
    const url = this.$router.url;
    this.$router.navigate([url.substr(0, url.lastIndexOf('/')), 'forgot']);
  }
}
