import { NgModule, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './common/shared';
import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './view/layout.component';
import { BreadcrumbComponent } from './components';
import { BreadcrumbService } from './services/breadcrumb';
import { LayoutService } from './services/layout';
import { ProfileService } from '@profile';
import { Router } from '@angular/router';
import { PUBLIC_ROUTE } from '@app/constants';
import { MenuDirective } from './directives/menu.directive';
import { DrawerComponent } from './components/drawer/drawer.component';

@NgModule({
  declarations: [LayoutComponent, BreadcrumbComponent, MenuDirective, DrawerComponent],
  imports: [CommonModule, LayoutRoutingModule, SharedModule],
  providers: [LayoutService, BreadcrumbService],
})
export class LayoutModule {
  constructor(profile: ProfileService, router: Router) {
    effect(() => {
      const data = profile.data();
      if (!data) {
        router.navigateByUrl(PUBLIC_ROUTE.url);
      }
    });
  }
}
