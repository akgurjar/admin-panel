import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const MT_BREAKPOINT = 600;
const TD_BREAKPOINT = 980;

export type DeviceType = 'MOBILE' | 'TABLET' | 'COMPUTER';

@Injectable({
  providedIn: 'root'
})
export class MediaQueryService implements OnDestroy {
  private _subject: BehaviorSubject<DeviceType> = new BehaviorSubject(this.getDevice);
  private _resizeHandler = this._onResizeHandler.bind(this);
  get change(): Observable<DeviceType> {
    return this._subject.asObservable();
  }
  constructor() {
    window.addEventListener('resize', this._resizeHandler, false);
  }
  get getDevice(): DeviceType {
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
  private _onResizeHandler() {
    this._subject.next(this.getDevice);
  }
  ngOnDestroy() {
    window.removeEventListener('resize', this._resizeHandler, false);
  }
}
