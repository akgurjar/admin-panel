import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaQueryService } from 'src/app/services/media-query';

import { SIDE_MENUS, PROFILE_ROUTE } from '../constants';
import { ProfileService } from '@profile';
import { environment } from '@environment';
import { LoaderService } from '@loader';
import { ConfirmService } from '@confirm';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  sideMenus = SIDE_MENUS;
  isLoading = false;
  isSideNavOpened: boolean = this.isDesktopDevice;
  get sideNavMode(): 'over' | 'side' {
    return this.isDesktopDevice ? 'side' : 'over';
  }
  get isMobileDevice(): boolean {
    return this.mediaQuery.isMobile;
  }
  get isDesktopDevice(): boolean {
    return this.mediaQuery.isComputer;
  }
  readonly appVersion = environment.appVersion;
  admin: any = null;
  get adminName() {
    return this.admin ? this.admin.displayName : 'loading...';
  }
  get profileUrl(): string {
    return PROFILE_ROUTE.url;
  }
  constructor(
    loader: LoaderService,
    private $profile: ProfileService,
    public mediaQuery: MediaQueryService,
    private $confirm: ConfirmService
  ) {
    loader.changes.subscribe(isLoading => this.isLoading = isLoading);
    $profile.changes.subscribe(admin => {
      this.admin = admin;
    });
  }
  ngOnInit() {
  }
  onSideNavToggleHandler() {
    this.isSideNavOpened = !this.isSideNavOpened;
  }
  onSideNavOpenedChangeHandler(status) {
    if (this.isSideNavOpened && !status) {
      this.isSideNavOpened = false;
    }
  }
  ngOnDestroy() {}
  onLogoutHandler() {
    this.$confirm.popup({
      title: 'Confirm Logout',
      message: 'Are you sure you want to logout?'
    }).subscribe(result => {
      if (result) {
        this.$profile.logout();
      }
    });
  }
}
