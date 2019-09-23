import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PublicService } from '../../../services/public.service';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/constants/validation.constants';
import { FORGOT_ROUTE } from '../../../constants';
import { LAYOUT_ROUTE } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    fb: FormBuilder,
    private $public: PublicService,
    private $router: Router
  ) {
    this.loginForm = fb.group({
      email: ['admin@gmail.com', [Validators.required, ...CustomValidators.email]],
      password: ['asdfghjkl', [Validators.required, ...CustomValidators.password]],
      remember: [false, Validators.required]
    });
  }

  ngOnInit() {
  }
  onLoginHandler() {
    if (this.loginForm.valid && this.loginForm.enabled) {
      const { email, password, remember } = this.loginForm.value;
      // console.log(username, password, remember);
      this.loginForm.disable();
      this.$public.login({email, password}, remember)
      .then((status) => {
        // console.log(status);
        if (status) {
          this.$router.navigateByUrl(LAYOUT_ROUTE.url);
        } else {
          this.loginForm.enable();
        }
      }).catch((error) => {
        this.loginForm.enable();
        console.log(error);
      });
    }
  }
  onForgotPasswordHandler() {
    this.$router.navigateByUrl(FORGOT_ROUTE.url);
  }
}
