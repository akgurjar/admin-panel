import { NgModule, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './view/public.component';
import { PublicService } from './services/public.service';
import { PublicSharedModule } from './common';
import { ProfileService } from '@profile';
import { Router } from '@angular/router';
import { LAYOUT_ROUTE } from '@app/constants';

@NgModule({
  declarations: [PublicComponent],
  imports: [CommonModule, PublicRoutingModule, PublicSharedModule],
  providers: [PublicService],
})
export class PublicModule {
  constructor(profile: ProfileService, router: Router) {
    console.info('ProfileData', profile.data());
    effect(() => {
      const data = profile.data();
      console.info('PublicModule', data);
      if (data) {
        router.navigateByUrl(LAYOUT_ROUTE.url);
      }
    });
  }
}
