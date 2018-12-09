import {
  Component,
  OnInit,
  Input,
  ContentChildren,
  QueryList,
  TemplateRef,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter
} from '@angular/core';
import { ListData } from '@models';
import { MatDialog } from '@angular/material';
import { ForDirective } from '../for';
import { fromEvent, config } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit, AfterViewInit {
  @Input() config: Listing.Config;
  @Output() change: EventEmitter<any> = new EventEmitter();
  get label(): string {
    return this.config.label;
  }
  get hasSearch(): boolean {
    return this.config ? this.config.options.search : false;
  }
  @ContentChildren(ForDirective) templates: QueryList<ForDirective>;
  get actions(): TemplateRef<any> {
    const actionsTemplate = this.templates && this.templates.find(({name}) => name === 'list-actions');
    return actionsTemplate ? actionsTemplate.ref : null;
  }
  private _listingData = {
    filter: null,
    search: null,
    page: {
      index: 1,
      size: 10
    }
  };
  get pageSize() {
    return this._listingData.page.size;
  }
  listLength = 100;
  @ViewChild('searchField') _searchRef: ElementRef<HTMLInputElement>;
  constructor(private _dialog: MatDialog) {
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    fromEvent(this._searchRef.nativeElement, 'input')
    .pipe(debounceTime(500))
    .subscribe(() => {
      this._listingData.search = this._searchRef.nativeElement.value;
      this._emitEvent();
    });
  }
  onFilterHandler() {
    if (this.config && this.config.options && this.config.options.filter) {
      const subscription = this._dialog.open(this.config.options.filter, {
        disableClose: true,
        position: {
          right: '20px'
        },
        autoFocus: false,
        data: this._listingData.filter
      }).afterClosed().subscribe((filterData) => {
        if (filterData !== undefined) {
          this._listingData.filter = filterData;
        }
        this._emitEvent();
        subscription.unsubscribe();
      });
    }
  }
  onSearchFieldHandler(event: MouseEvent) {
    event.stopPropagation();
  }
  onPageHandler(data) {
    this._listingData.page = {
      index: data.pageIndex,
      size: data.pageSize
    };
    this._emitEvent();
  }
  private _emitEvent() {
    this.change.emit({...this._listingData});
  }
}
