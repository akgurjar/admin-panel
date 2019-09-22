import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutSharedModule } from './common/layout-shared';
import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './view/layout.component';
import { BreadcrumbComponent } from './components';
import { BreadcrumbService } from './services/breadcrumb';
import { LayoutService } from './services/layout/layout.service';
import { ProfileService } from '@profile';
import { Router } from '@angular/router';
import { takeWhile, finalize } from 'rxjs/operators';
import { PUBLIC_ROUTE } from 'src/app/constants';


@NgModule({
  declarations: [
    LayoutComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    LayoutSharedModule,
  ],
  providers: [
    LayoutService,
    BreadcrumbService,
  ]
})
export class LayoutModule {
  constructor(profile: ProfileService, router: Router) {
    profile.changes.pipe(takeWhile(data => data))
    .subscribe(() => {}, () => {}, () => {
      router.navigateByUrl(PUBLIC_ROUTE.url);
    });
  }
}
