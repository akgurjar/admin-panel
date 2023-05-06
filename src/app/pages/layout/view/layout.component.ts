import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { MediaQueryService } from '../../../services/media-query/media-query.service';

import { SIDE_MENUS } from '../common/models';
import { ProfileService } from '@profile';
import { env } from '@env';
import { LoaderService } from '@loader';
import { Profile } from '@app/services/profile/profile.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  @HostBinding('class.drawer--opened') isDrawerOpened = true;
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
  readonly appVersion = env.appVersion || '0.0.0';
  admin: Profile = this.$profile.data() as Profile;
  get adminName() {
    return this.admin ? this.admin.name : 'loading...';
  }
  constructor(
    loader: LoaderService,
    private $profile: ProfileService,
    public mediaQuery: MediaQueryService
  ) {
    loader.changes.subscribe((isLoading) => (this.isLoading = isLoading));
  }
  ngOnInit() {}
  onDrawerToggle() {
    this.isDrawerOpened = !this.isDrawerOpened;
  }
  ngOnDestroy() {}
  onLogoutHandler() {
    this.$profile.logout();
  }
}
