import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { skip } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private _admin: BehaviorSubject<any> = new BehaviorSubject(null);
  get admin(): Observable<any> {
    return this._admin.pipe(skip(1));
  }
  constructor() { }
  refreshAdmin() {}
}
