import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

let loadingCount = 0;

@Injectable()
export class RequestLoaderService {
  private _state: BehaviorSubject<boolean> = new BehaviorSubject(false);
  get changes() {
    return this._state.asObservable();
  }
  constructor() { }
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
    this._state.next(false);
  }
}
