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
  EventEmitter,
  ContentChild
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ForDirective } from '../../for';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TableComponent } from '../table.component';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent implements OnInit, AfterViewInit {
  private _tableSource: Table.Source<any>;
  @Input()
  set tableSource(source: Table.Source<any>) {
    this._tableSource = source;
    if (this._table) {
      this._table.tableSource = source;
    }
  }
  get tableSource() {
    return this._tableSource;
  }
  @Output() change: EventEmitter<any> = new EventEmitter();
  get label(): string {
    return this.tableSource.label;
  }
  get hasSearch(): boolean {
    return this.tableSource && this.tableSource.options && !!this.tableSource.options.search;
  }
  @ContentChildren(ForDirective) templates: QueryList<ForDirective>;
  @ContentChild(TableComponent) _table: TableComponent;
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
    // if (!this._table.tableSource) {
    //   this._table.tableSource = this.tableSource;
    // }
  }
  onFilterHandler() {
    if (this.tableSource && this.tableSource.options && this.tableSource.options.filterComponent) {
      const subscription = this._dialog.open(this.tableSource.options.filterComponent, {
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
