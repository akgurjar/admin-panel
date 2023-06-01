import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LOGIN_ROUTE, MFA_VERIFY_ROUTE } from '@app/pages/public/constants';
import { PLATFORMS } from '@app/pages/public/constants/platform.constants';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent {
  platforms = PLATFORMS;
  loginUrl = LOGIN_ROUTE.url;
  @Input() token!: string;
  @Input() remember!: boolean;
  @Input() qrUrl!: string;
  platformControl = new FormControl('1');
  constructor(route: ActivatedRoute, private $router: Router) {
    route.queryParams.subscribe((params) => {
      this.qrUrl = params['qr'];
      this.token = params['token'];
      this.remember = params['remember'];
    });
  }
  onNextHandler() {
    if (this.platformControl.valid) {
      this.$router.navigate([MFA_VERIFY_ROUTE.url], {
        queryParams: {
          platform: this.platformControl.value,
        },
        queryParamsHandling: 'merge',
      });
    }
  }
}
