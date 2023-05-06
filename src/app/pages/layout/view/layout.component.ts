import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { MediaQueryService } from '@services/media-query';

import { SIDE_MENUS } from '../common/models';
import { LoaderService } from '@loader';
import { Profile, ProfileService } from '@services/profile';
import { env } from '@env';
import { LayoutService } from '../services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  @HostBinding('class.drawer--opened') isDrawerOpened = true;
  sideMenus = SIDE_MENUS;
  readonly appVersion = env.appVersion || '0.0.0';
  admin: Profile = this.$profile.data() as Profile;
  get adminName() {
    return this.admin ? this.admin.name : 'loading...';
  }
  constructor(
    private $profile: ProfileService,
    private $layoutService: LayoutService
  ) {}
  ngOnInit() {}
  onDrawerToggle() {
    this.isDrawerOpened = !this.isDrawerOpened;
  }
  ngOnDestroy() {}
  onLogoutHandler() {
    this.$layoutService.logout();
  }
}
