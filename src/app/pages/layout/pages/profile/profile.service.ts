import { Injectable } from '@angular/core';
import { LayoutService } from '../../shared/services/layout/layout.service';

@Injectable()
export class ProfileService {
  get profile() {
    return this._layout.admin;
  }
  constructor(
    private _layout: LayoutService
  ) { }
}
