import { Injectable } from '@angular/core';
import {
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { ProfileService } from '@profile';
import { PUBLIC_ROUTE } from '@app/constants';

@Injectable({
  providedIn: 'root',
})
export class LayoutGuard {
  constructor(private $router: Router, private $profile: ProfileService) {}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    return this.handler();
  }
  async canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Promise<boolean | UrlTree> {
    return this.handler();
  }
  private async handler(): Promise<boolean | UrlTree> {
    if (!this.$profile.isLoaded) {
      await this.$profile.query();
    }
    if (!this.$profile.data()) {
      return this.$router.parseUrl(PUBLIC_ROUTE.url);
    }
    return true;
  }
}
