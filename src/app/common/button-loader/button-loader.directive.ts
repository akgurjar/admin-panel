import { Directive, AfterViewInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButtonLoader]'
})
export class ButtonLoaderDirective implements AfterViewInit {
  private _loaderStatus = false;
  @Input()
  set appButtonLoader(status: any) {
    this._loaderStatus = !!status;
    if (this._loaderElement) {
      this._updateStatus();
    }
  }
  private _loaderElement: HTMLElement;
  wrapper: HTMLElement = null;
  constructor(private _elRef: ElementRef<HTMLButtonElement>) {
  }
  ngAfterViewInit() {
    this._loaderElement = document.createElement('span');
    this._loaderElement.className = 'button-loader';
    this._elRef.nativeElement.appendChild(this._loaderElement);
    this._updateStatus();
  }
  private _updateStatus() {
    if (this._loaderStatus) {
      this._loaderElement.classList.add('button-loader--active');
    } else {
      this._loaderElement.classList.remove('button-loader--active');
    }
  }

}
