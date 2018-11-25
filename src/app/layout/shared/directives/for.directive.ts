import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective {
  @Input() appFor: string;
  constructor(public template: TemplateRef<any>) { }

}
