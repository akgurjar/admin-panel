import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LOGIN_ROUTE } from '@app/pages/public/constants';
import { PLATFORMS } from '@app/pages/public/constants/platform.constants';
import { PublicService } from '@app/pages/public/services/public.service';
// import { ActivatedRoute } from '@angular/router';
// import { PublicService } from '@public/services/public.service';
// import { CustomValidators } from '@constants/validation.constants';
// import { LOGIN_ROUTE } from '@public/constants';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
})
export class VerifyComponent implements OnInit {
  loginUrl = LOGIN_ROUTE.url;
  platformLogo?: string = '';
  @Input() token!: string;
  @Input() platform?: string;
  @Input() remember?: boolean;
  otpControl = this.$fb.nonNullable.control('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  constructor(
    private $fb: FormBuilder,
    private $publicService: PublicService,
    route: ActivatedRoute
  ) {
    route.queryParams.subscribe((params) => {
      this.remember = params['remember'];
      this.token = params['token'];
      this.platform = params['platform'];
      this.platformLogo = PLATFORMS.find(
        (p) => p.value === this.platform
      )?.logo;
    });
    // this.otpControl.valueChanges.subscribe(() => {
    //   setTimeout(() => {
    //     if (this.otpControl.valid && this.otpControl.enabled) {
    //       console.info('Hitting Request');
    //       // this.onVerifyHandler();
    //     }
    //   });
    // });
  }
  ngOnInit(): void {}
  onVerifyHandler() {
    if (this.otpControl.valid && this.otpControl.enabled) {
      const payload: Record<string, string> = {
        otp: this.otpControl.value as string,
      };
      if (this.platform) {
        payload['platform'] = this.platform;
      }
      this.otpControl.disable();
      this.$publicService
        .verify(payload, this.token, this.remember ?? false)
        .catch(() => {
          this.otpControl.enable();
        });
    }
  }
}
