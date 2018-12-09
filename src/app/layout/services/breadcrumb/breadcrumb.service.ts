import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class BreadcrumbService {
  private _subject: Subject<{}> = new Subject();
  get events() {
    return this._subject.asObservable();
  }
  constructor() { }
  replace(target: string, label: string) {
    this._subject.next({target, label});
  }
}
