import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaQueryService } from '../shared/services/media-query/media-query.service';

import { SIDE_MENUS } from './common/models';
import { ConfirmService } from './common/confirm';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  sideMenus = SIDE_MENUS;
  isSideNavOpened: boolean = this.isDesktopDevice;
  get sideNavMode(): 'over' | 'side' {
    return this.isDesktopDevice ? 'side' : 'over';
  }
  get isMobileDevice(): boolean {
    return this.mediaQuery.getDevice === 'MOBILE';
  }
  get isDesktopDevice(): boolean {
    return this.mediaQuery.getDevice === 'COMPUTER';
  }
  constructor(
    public mediaQuery: MediaQueryService,
    private _confirm: ConfirmService
  ) {
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
    this._confirm.popup({
      title: 'Confirm Logout',
      message: 'Are you sure you want to logout?'});
  }
}
