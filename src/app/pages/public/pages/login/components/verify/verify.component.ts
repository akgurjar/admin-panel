import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  @Input() platform?: string;
  @Input() token?: string;
  @Input() remember?: string;
  otpControl = new FormControl();
  constructor() {
    this.otpControl.valueChanges.subscribe(console.info);
  }
  ngOnInit(): void {
    setTimeout(() => {
      console.info(this.platform, this.token, this.remember);
    }, 1000);
  }
}
