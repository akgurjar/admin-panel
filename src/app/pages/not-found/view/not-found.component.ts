import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaQueryService } from '../../../services/media-query/media-query.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, OnDestroy {
  svgPath = '';
  constructor(private $mediaQuery: MediaQueryService) {
    this._calcPath();
    this.$mediaQuery.change.subscribe(() => this._calcPath());
  }

  ngOnInit() {
  }
  private _calcPath() {
    const round = Math.ceil(window.innerWidth / 60);
    let path = `M0,5`;
    for (let i = 0; i < round; i++) {
      path += ` a20,10 0 0 0 30,0 a20,10 0 0 1 30,0`;
    }
    path += ` v5 h-${round * 60}`;
    this.svgPath = path;
  }
  ngOnDestroy() {}
}
