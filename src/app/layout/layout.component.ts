import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaQueryService } from '../shared/services/media-query/media-query.service';

import { SIDE_MENUS } from './common/models';
import { RequestLoaderService } from './shared/services/request-loader/request-loader.service';
import { LayoutService } from './shared/services/layout/layout.service';
import { environment } from '@environment';

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
    return this.mediaQuery.getDevice === 'MOBILE';
  }
  get isDesktopDevice(): boolean {
    return this.mediaQuery.getDevice === 'COMPUTER';
  }
  readonly appVersion = environment.appVersion;
  admin: any = null;
  get adminName() {
    return this.admin ? this.admin.name : 'loading...';
  }
  constructor(
    public mediaQuery: MediaQueryService,
    private _layout: LayoutService,
    reqLoader: RequestLoaderService
  ) {
    reqLoader.changes.subscribe(isLoading => this.isLoading = isLoading);
    _layout.admin.subscribe(admin => {
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
    this._layout.logout();
  }
}
