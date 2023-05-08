import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';

import { DRAWER_MENUS } from '@layout/constants';
import { Profile, ProfileService } from '@services/profile';
import { LayoutService } from '@layout/services';
import { env } from '@env';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  @HostBinding('class.drawer--opened') isDrawerOpened = false;
  readonly drawerMenus = DRAWER_MENUS;
  readonly appVersion = env.appVersion || '0.0.0';
  admin: Profile = this.$profile.data() as Profile;
  get adminName() {
    return this.admin ? this.admin.name : 'loading...';
  }
  title = DRAWER_MENUS[0].label;
  constructor(
    private $profile: ProfileService,
    private $layoutService: LayoutService
  ) {}
  ngOnInit() {}
  onDrawerToggle() {
    this.isDrawerOpened = !this.isDrawerOpened;
  }
  onMenuHandler(menu: DrawerMenu) {
    this.title = menu.label;
    this.isDrawerOpened = false;
  }
  ngOnDestroy() {}
  onLogoutHandler() {
    this.$layoutService.logout();
  }
}
