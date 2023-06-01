import {
  Injectable,
  OnDestroy,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';

const MT_BREAKPOINT = 600;
const TD_BREAKPOINT = 980;

export type DeviceType = 'MOBILE' | 'TABLET' | 'COMPUTER';

@Injectable({
  providedIn: 'root',
})
export class DeviceService implements OnDestroy {
  readonly #type: WritableSignal<DeviceType> = signal(this.getDevice);
  readonly type: Signal<DeviceType> = computed(() => this.#type());
  readonly isDesktop: Signal<boolean> = computed(
    () => this.#type() === 'COMPUTER'
  );
  readonly #resize = this.#onResize.bind(this);
  constructor() {
    window.addEventListener('resize', this.#resize, false);
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
  #onResize() {
    this.#type.set(this.getDevice);
  }
  ngOnDestroy() {
    window.removeEventListener('resize', this.#resize, false);
  }
}
