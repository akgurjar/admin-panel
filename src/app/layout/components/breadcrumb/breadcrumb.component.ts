import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BreadcrumbService } from '../../services/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  private _changes: Map<string, string> = new Map();
  private _baseUrlSteps: string[] = [];
  @Input()
  set baseUrl(url: string) {
    this._baseUrlSteps = this._createSteps(url);
  }
  routeSteps: RouteStep[] = [new RouteStep('Products', '/products')];
  private _routeChange: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(
    router: Router,
    private _route: ActivatedRoute,
    breadcrumb: BreadcrumbService
  ) {
    router.events.subscribe(this._routeChange.next.bind(this._routeChange));
    breadcrumb.events.subscribe(({label, target}: any) => {
      this._changes.set(target, label);
    });
  }
  ngOnInit() {
    // console.log(this._route.snapshot.params);
    this._routeChange.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this._route.params.subscribe(console.log);
        const steps = this._createSteps(event.urlAfterRedirects);
        this.routeSteps = steps.reduce<{[key: string]: any}>((data, step, index, arr) => {
          if (step === 'dashboard') {
            return data;
          }
          if (step !== 'dashboard' && step !== this._baseUrlSteps[index]) {
            const currentUrl = `${data.currentUrl}/${step}`;
            if (this._changes.has(step)) {
              step = this._changes.get(step);
            }
            return {
              currentUrl,
              steps: [...data.steps, new RouteStep(step, currentUrl)]
            };
          }
          return data;
        }, {currentUrl: '/', steps: []}).steps;
      }
    });
  }
  private _createSteps(url: string): string[] {
    return url.split('/').filter(path => path !== '');
  }
}

class RouteStep {
  constructor(public label: string, public url: string) {
    this.label = `${label.substr(0, 1).toUpperCase()}${label.substring(1)}`;
  }
}
