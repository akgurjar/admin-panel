import { Component, effect } from '@angular/core';
import { LAYOUT_ROUTE } from '@app/constants';
import { DeviceService } from '@services/device';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  readonly layoutUrl = LAYOUT_ROUTE.url;
  svgPath = '';
  constructor(private $device: DeviceService) {
    effect(() => {
      console.info($device.type());
      this.#calcPath();
    });
  }

  #calcPath() {
    const round = Math.ceil(window.innerWidth / 60);
    let path = `M0,5`;
    for (let i = 0; i < round; i++) {
      path += ` a20,10 0 0 0 30,0 a20,10 0 0 1 30,0`;
    }
    path += ` v5 h-${round * 60}`;
    this.svgPath = path;
  }
}
