import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PublicService } from '../../../services/public.service';
import { CustomValidators } from 'src/app/constants/validation.constants';
import { LOGIN_ROUTE } from '@app/pages/public/constants';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
})
export class ResetComponent implements OnInit {
  visibility = {
    password: false,
    confirmPassword: false,
  };
  resetForm = this.$fb.nonNullable.group({
    password: ['', CustomValidators.password],
    confirmPassword: [
      '',
      CustomValidators.password.concat(CustomValidators.match('password')),
    ],
  });
  resetState: 'LOADING' | 'FORM' | 'DONE' = 'LOADING';
  isResetDone = false;
  isTokenValid = true;
  get pwdControl() {
    return this.resetForm.controls.password;
  }
  get confirmPwdControl() {
    return this.resetForm.controls.confirmPassword;
  }
  readonly loginUrl = LOGIN_ROUTE.url;
  #token = '';
  constructor(
    route: ActivatedRoute,
    private $fb: FormBuilder,
    private $public: PublicService
  ) {
    route.params.subscribe(({ token }) => {
      this.#token = token;
      this.resetState = 'FORM';
    });
  }

  ngOnInit() {}
  onVisibilityHandler(
    event: MouseEvent,
    field: 'password' | 'confirmPassword'
  ) {
    event.stopPropagation();
    if (this.resetForm.enabled) {
      this.visibility[field] = !this.visibility[field];
    }
  }
  onResetPasswordHandler() {
    if (this.resetForm.enabled && this.resetForm.valid) {
      const { password } = this.resetForm.getRawValue();
      this.resetForm.disable();
      this.$public
        .reset(password, this.#token)
        .then(() => {
          this.isResetDone = true;
          this.resetState = 'DONE';
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.resetForm.enable();
        });
    } else if (this.resetForm.enabled) {
      this.resetForm.markAllAsTouched();
    }
  }
}
