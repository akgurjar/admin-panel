import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { ProfileService } from '@profile';
import { map, mergeMap, first } from 'rxjs/operators';
import { PUBLIC_ROUTE } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class LayoutGuard implements CanActivate, CanLoad {
  constructor(
    private $router: Router,
    private $profile: ProfileService,
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.handler();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.handler();
  }
  private handler(): Observable<boolean> {
    let observable = this.$profile.changes;
    if (!this.$profile.isProfileLoaded) {
      observable = this.$profile.queryProfile().pipe(mergeMap(() => this.$profile.changes));
    }
    return observable.pipe(first(), map((profile) => {
      console.log('Profile', profile);
      if (!profile) {
        this.$router.navigateByUrl(PUBLIC_ROUTE.url);
        return false;
      }
      return true;
    }));
  }
}
