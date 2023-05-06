import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  Router,
  NavigationStart,
  NavigationCancel,
  NavigationError,
  NavigationEnd,
} from '@angular/router';
import { PopupService } from '@popup';
import { MESSAGES } from '@constants/index';

let loadingCount = 0;

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private $state: BehaviorSubject<boolean> = new BehaviorSubject(false);
  readonly changes = this.$state.asObservable();
  constructor(private $router: Router, private $popup: PopupService) {
    this.initRoutingLoader();
  }
  markAsLoading() {
    if (loadingCount === 0) {
      this.$state.next(true);
    }
    loadingCount += 1;
  }
  completeLoading() {
    if (loadingCount > 0) {
      loadingCount -= 1;
      this.$state.next(false);
    }
  }
  reset() {
    loadingCount = 0;
    this.$state.next(false);
  }
  initRoutingLoader() {
    this.$router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.markAsLoading();
      }
      if (
        loadingCount > 0 &&
        (event instanceof NavigationCancel ||
          event instanceof NavigationError ||
          event instanceof NavigationEnd)
      ) {
        this.completeLoading();
      }
      if (event instanceof NavigationError) {
        let message = MESSAGES.OFFLINE;
        if (navigator.onLine) {
          message = MESSAGES.ERROR.UNKNOWN;
        }
        this.$popup.error(message, { duration: 5000 });
      }
    });
  }
}
