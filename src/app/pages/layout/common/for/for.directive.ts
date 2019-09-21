import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('appFor') name: string;
  constructor(public ref: TemplateRef<any>) { }

}
