import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DRAWER_MENUS, PROFILE_ROUTE } from '@layout/constants';
import { env } from '@env';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  readonly drawerMenus = DRAWER_MENUS;
  readonly appVersion = env.appVersion || '0.0.0';
  @Output() change = new EventEmitter<string>();
  ngOnInit(): void {
    this.onMenuHandler(DRAWER_MENUS[0]);
  }
  onMenuHandler(menu: DrawerMenu) {
    menu.isOpened = true;
    this.change.emit(menu.label);
  }
  onToggleHandler(menu: DrawerMenu, e: MouseEvent) {
    menu.isOpened = !menu.isOpened;
    e.preventDefault();
    e.stopImmediatePropagation();
  }
}
