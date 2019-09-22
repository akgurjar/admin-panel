import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './view/public.component';
import { PublicService } from './services/public.service';
import { PublicSharedModule } from './common';
import { ProfileService } from '@profile';
import { takeWhile, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LAYOUT_ROUTE } from 'src/app/constants';


@NgModule({
  declarations: [
    PublicComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PublicSharedModule,
  ],
  providers: [
    PublicService,
  ]
})
export class PublicModule {
  constructor(profile: ProfileService, router: Router) {
    profile.changes.pipe(takeWhile(data => !data))
    .subscribe(() => {}, () => {}, () => {
      router.navigateByUrl(LAYOUT_ROUTE.url);
    });
  }
}
