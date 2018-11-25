import { Component, OnInit, Input, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { ListData } from '@models';
import { MatDialog } from '@angular/material';
import { ForDirective } from '../../directives/for.directive';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  @Input() list: ListData;
  get label(): string {
    return this.list.label;
  }
  get hasSearch(): boolean {
    return this.list ? this.list.options.search : false;
  }
  @ContentChildren(ForDirective) templates: QueryList<ForDirective>;
  get actions(): TemplateRef<any> {
    return this.templates ? this.templates.find(({appFor}) => appFor === 'list-actions').template : null;
  }
  constructor(private _dialog: MatDialog) {
  }

  ngOnInit() {
  }
  onFilterHandler() {
    if (this.list && this.list.options && this.list.options && this.list.options.filter) {
      this._dialog.open(this.list.options.filter, {disableClose: true, position: {right: '10px'}});
    }
  }
  onSearchFieldHandler(event: MouseEvent) {
    event.stopPropagation();
  }
}
