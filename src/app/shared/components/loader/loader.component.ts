import { Component, OnInit, Input } from '@angular/core';
import { Routes, ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  private _loading = false;
  private _isActivated = false;
  @Input()
  set isActivated(value) {
    this._isActivated = !!value;
  }
  get isActivated(): boolean {
    return this._isActivated;
  }
  get isLoading(): boolean {
    if (this._isActivated) {
      return this._loading;
    }
    return true;
  }
  get styleClass() {
    return {
      'loader__container--active': this.isLoading,
      'loader__container--background': this.isActivated
    };
  }
  constructor(public route: ActivatedRoute, router: Router) {
    // console.log(route.routeConfig);
    router.events.subscribe((event) => {
      if (event['url'] && this._matchPath(event['url'], route.routeConfig ? route.routeConfig.children : null)) {
        if (event instanceof NavigationStart) {
          this._loading = true;
        }
        if (event instanceof NavigationEnd) {
          this._loading = false;
        }
      }
    });
  }
  ngOnInit() {
  }
  private _matchPath(url: string, routes?: Routes): boolean {
    if (routes) {
      const paths = (function recursive(_routes: Routes, _path: string): string[] {
        return _routes.reduce((_paths, route) => {
          const path = _path !== null ? `${_path}/${route.path}` : route.path;
          if (route.children) {
            return [..._paths, ...recursive(route.children, path)];
          }
          return [..._paths, path];
        }, []);
      })(routes, '');
      return paths.indexOf(url) !== -1;
    }
    return false;
  }
}
