import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMenu]',
})
export class MenuDirective {
  @Input() appMenu!: unknown;
  constructor(el: ElementRef) {
    console.info(el);
  }
}
