import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PublicService } from '../../../services/public.service';
import { CustomValidators } from 'src/app/constants/validation.constants';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  visibility = {
    password: false,
    confirmPassword: false
  };
  resetForm: FormGroup;
  resetState: 'LOADING' | 'FORM' | 'DONE' = 'LOADING';
  isResetDone = false;
  isTokenValid = true;
  constructor(
    fb: FormBuilder,
    route: ActivatedRoute,
    private $public: PublicService,
  ) {
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
      }, 100000);
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
      this.$public.reset(password).then(() => {
        this.isResetDone = true;
        this.resetForm.enable();
      }).catch((error) => {
        this.resetForm.enable();
        console.log(error);
      });
    }
  }
}
