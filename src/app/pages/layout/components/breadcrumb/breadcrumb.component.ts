import { BehaviorSubject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '../../services';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  private $changes: Map<string, string> = new Map();
  private $baseUrlSteps: string[] = [];
  @Input()
  set baseUrl(url: string) {
    this.$baseUrlSteps = this._createSteps(url);
  }
  routeSteps: RouteStep[] = [new RouteStep('Products', '/products')];
  private $routeChange: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(
    router: Router,
    breadcrumb: BreadcrumbService,
    private $route: ActivatedRoute,
  ) {
    router.events.subscribe(this.$routeChange.next.bind(this.$routeChange));
    breadcrumb.events.subscribe(({label, target}: any) => {
      this.$changes.set(target, label);
    });
  }
  ngOnInit() {
    // console.log(this._route.snapshot.params);
    this.$routeChange.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.$route.params.subscribe(console.log);
        const steps = this._createSteps(event.urlAfterRedirects);
        this.routeSteps = steps.reduce<{[key: string]: any}>((data, step, index, arr) => {
          if (step === 'layout') {
            return data;
          }
          if (step !== 'layout' && step !== this.$baseUrlSteps[index]) {
            const currentUrl = `${data.currentUrl}/${step}`;
            if (this.$changes.has(step)) {
              step = this.$changes.get(step);
            }
            return {
              currentUrl,
              steps: [...data.steps, new RouteStep(step, currentUrl)]
            };
          }
          return data;
        }, {currentUrl: '/layout', steps: []}).steps;
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
