import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private _baseUrlSteps: string[] = [];
  @Input()
  set baseUrl(url: string) {
    this._baseUrlSteps = this._createSteps(url);
  }
  routeSteps: RouteStep[] = [new RouteStep('Products', '/products')];
  private _routeChange: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(router: Router, private _route: ActivatedRoute) {
    router.events.subscribe(this._routeChange.next.bind(this._routeChange));
  }
  ngOnInit() {
    console.log(this._route.snapshot.params);
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
  constructor(public label: string, public url: string) {}
}
