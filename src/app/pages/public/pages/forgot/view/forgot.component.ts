import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicService } from '../../../services/public.service';
import { CustomValidators } from 'src/app/constants/validation.constants';
import { LOGIN_ROUTE } from '../../../constants';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  formControl: FormControl = new FormControl(null, [Validators.required, ...CustomValidators.email]);
  mailSentTo: string = null;
  constructor(
    private $public: PublicService,
    private $router: Router
  ) {}

  ngOnInit() {
  }
  onForgotMailHandler() {
    if (this.formControl.valid && this.formControl.enabled) {
      const email = this.formControl.value;
      this.formControl.disable();
      this.$public.forgot(email).then(() => {
        this.mailSentTo = email;
      }).catch((error) => {
        this.formControl.enable();
        // this
      });
    }
  }
  onBackToLoginHandler() {
    this.$router.navigateByUrl(LOGIN_ROUTE.url);
  }
}
