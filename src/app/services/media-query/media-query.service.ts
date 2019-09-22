import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const MT_BREAKPOINT = 600;
const TD_BREAKPOINT = 980;

export type DeviceType = 'MOBILE' | 'TABLET' | 'COMPUTER';

@Injectable({
  providedIn: 'root'
})
export class MediaQueryService implements OnDestroy {
  private $subject: BehaviorSubject<DeviceType> = new BehaviorSubject(this.device);
  private $resizeHandler = this._onResizeHandler.bind(this);
  readonly change: Observable<DeviceType> = this.$subject.asObservable();
  constructor() {
    window.addEventListener('resize', this.$resizeHandler, false);
  }
  get device(): DeviceType {
    const width = window.innerWidth;
    // Mobile
    if (width < MT_BREAKPOINT) {
      return 'MOBILE';
    }
    // Computer
    if (width > TD_BREAKPOINT) {
      return 'COMPUTER';
    }
    // Tablet
    return 'TABLET';
  }
  get isMobile(): boolean {
    return this.device === 'MOBILE';
  }
  get isTablet(): boolean {
    return this.device === 'TABLET';
  }
  get isComputer(): boolean {
    return this.device === 'COMPUTER';
  }
  private _onResizeHandler() {
    this.$subject.next(this.device);
  }
  ngOnDestroy() {
    window.removeEventListener('resize', this.$resizeHandler, false);
  }
}
