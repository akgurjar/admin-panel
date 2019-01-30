import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_ERROR, CustomValidators } from '@form-field';
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  matError = MAT_ERROR;
  visibility = {
    password: false,
    confirmPassword: false
  };
  resetForm: FormGroup;
  resetState: 'LOADING' | 'FORM' | 'DONE' = 'LOADING';
  isResetDone = false;
  isTokenValid = true;
  constructor(fb: FormBuilder, private _auth: AuthService, route: ActivatedRoute) {
    this.resetForm = fb.group({
      password: [null, CustomValidators.password],
      confirmPassword: [null, [...CustomValidators.password, CustomValidators.match('password')]]
    });
    route.params.subscribe(({token}) => {
      setTimeout(() => {
        if (token === 'asdfghjkl') {
          this.resetState = 'FORM';
        } else {
          this.resetState = null;
        }
      }, 4000);
    });
  }

  ngOnInit() {
  }
  onVisibilityHandler(event: MouseEvent, field: string) {
    event.stopPropagation();
    if (this.resetForm.enabled) {
      this.visibility[field] = !this.visibility[field];
    }
  }
  onResetPasswordHandler() {
    if (this.resetForm.enabled && this.resetForm.valid) {
      const { password } = this.resetForm.value;
      this.resetForm.disable();
      this._auth.reset(password).then(() => {
        this.isResetDone = true;
        this.resetForm.enable();
      }).catch((error) => {
        this.resetForm.enable();
        console.log(error);
      });
    }
  }
}
