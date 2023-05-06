import { Injectable } from '@angular/core';
import { Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from '@profile';
import { map, mergeMap, first } from 'rxjs/operators';
import { LAYOUT_ROUTE } from 'src/app/constants';

@Injectable({
  providedIn: 'root',
})
export class PublicGuard  {
  constructor(private $router: Router, private $profile: ProfileService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.handler(state.url.split('/').filter((path) => path));
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.handler(segments.map((segment) => segment.path));
  }
  private handler(paths: string[]) {
    let observable = this.$profile.changes;
    if (!this.$profile.isLoaded) {
      observable = this.$profile
        .query()
        .pipe(mergeMap(() => this.$profile.changes));
    }
    return observable.pipe(
      first(),
      map((profile) => {
        if (profile) {
          // if (paths[1] === 'reset') {
          //   return true;
          // }
          this.$router.navigateByUrl(LAYOUT_ROUTE.url);
          return false;
        }
        return true;
      })
    );
  }
}
