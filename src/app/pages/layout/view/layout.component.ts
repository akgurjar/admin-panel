import {
  Component,
  OnInit,
  OnDestroy,
  HostBinding,
  effect,
} from '@angular/core';

import { DRAWER_MENUS, PROFILE_ROUTE } from '@layout/constants';
import { LayoutService } from '@layout/services';
import { DeviceService } from '@services/device';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  #isDesktopDevice = false;
  #isDrawerOpened = false;
  @HostBinding('class.drawer--opened')
  get isDrawerOpened() {
    return this.#isDesktopDevice || this.#isDrawerOpened;
  }

  title = '';
  readonly profileUrl = PROFILE_ROUTE.url;
  constructor(
    private $layoutService: LayoutService,
    private $deviceService: DeviceService
  ) {
    effect(() => {
      this.#isDesktopDevice = this.$deviceService.isDesktop();
    });
  }
  ngOnInit() {}
  onDrawerToggle() {
    this.#isDrawerOpened = !this.#isDrawerOpened;
  }
  ngOnDestroy() {}
  onLogoutHandler() {
    this.$layoutService.logout();
  }
}
