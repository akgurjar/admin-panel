import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationStart, NavigationCancel, NavigationError, NavigationEnd } from '@angular/router';
import { PopupService } from '@popup';

let loadingCount = 0;

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _state: BehaviorSubject<boolean> = new BehaviorSubject(false);
  readonly changes = this._state.asObservable();
  constructor(private _router: Router, private _popup: PopupService) {
    this.initRoutingLoader();
  }
  markAsLoading() {
    if (loadingCount === 0) {
      this._state.next(true);
    }
    loadingCount += 1;
  }
  completeLoading() {
    if (loadingCount > 0) {
      loadingCount -= 1;
      this._state.next(false);
    }
  }
  reset() {
    loadingCount = 0;
    this._state.next(false);
  }
  initRoutingLoader() {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.markAsLoading();
      }
      if (loadingCount > 0 && (event instanceof NavigationCancel || event instanceof NavigationError ||event instanceof NavigationEnd)) {
        this.completeLoading();
      }
      if (event instanceof NavigationError) {
        let message = 'You are offline, please connect to internet and retry.';
        if (navigator.onLine) {
          message = 'Internal server error !';
        }
        this._popup.open(message, 'ERROR', {duration: 5000});
      }
    });
  }
}
