import { Injectable } from '@angular/core';
import { ConfirmService } from '@confirm';
import { ProfileService } from '@profile';

@Injectable()
export class LayoutService {
  constructor(
    private $confirm: ConfirmService,
    private $profile: ProfileService
  ) {}
  logout() {
    const info = {
      title: 'Confirm Logout',
      message: 'Are you sure, you want to logout?',
    };
    this.$confirm.popup(info).subscribe((confirm) => {
      if (confirm) {
        this.$profile.logout();
      }
    });
  }
}
