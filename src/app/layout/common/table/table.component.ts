import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChildren,
  QueryList,
  EventEmitter,
  ContentChildren,
  ViewChild,
  ElementRef
} from '@angular/core';
import { MatTableDataSource, MatCheckboxChange, MatCheckbox, MatDialog } from '@angular/material';
import { ForDirective } from '../for';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  exportAs: 'DataTable'
})
export class TableComponent implements OnInit {
  private _disabled = false;
  @Input()
  set disabled(state: boolean) {
    this._disabled = coerceBooleanProperty(state);
    if (!this._disabled && this.searchRef) {
      setTimeout(() => {
        this.searchRef.nativeElement.focus();
      });
    }
  }
  get disabled(): boolean {
    return this._disabled;
  }
  @Input() tableSource: Table.Source<any>;
  @Output() selectChange: EventEmitter<any> = new EventEmitter();
  @Output() optionChange: EventEmitter<any> = new EventEmitter();
  get dataSource(): MatTableDataSource<any> {
    return new MatTableDataSource(this.tableSource.data.rows);
  }
  get displayedColumns(): string[] {
    if (this.tableSource) {
      const columns = this.tableSource.columns.map(column => column.id);
      const indexedColumns = this.tableSource.options && this.tableSource.options.index ? ['index', ...columns] : columns;
      return this.tableSource.options && this.tableSource.options.selection ? ['selection', ...indexedColumns] : indexedColumns;
    }
    return [];
  }
  @ContentChildren(ForDirective) templates: QueryList<ForDirective>;
  @ViewChildren(MatCheckbox) checkBoxList: QueryList<MatCheckbox>;
  @ViewChild('searchInput') searchRef: ElementRef<HTMLInputElement>;
  get checkBoxes(): MatCheckbox[] {
    return this.checkBoxList ? this.checkBoxList.toArray() : [];
  }
  get rowCheckBoxes(): MatCheckbox[] {
    return this.checkBoxes.filter((_, index: number) => index > 0);
  }
  get selection() {
    return this.rowCheckBoxes.reduce((total, checkBox, index) => {
      if (checkBox.checked) {
        return [...total, {...this.tableSource.data[index]}];
      }
      return total;
    }, []);
  }
  get length(): number {
    return this.tableSource ? this.tableSource.data.length : 0;
  }
  get pageSize(): number {
    return this.tableSource ? this.tableSource.data.pageSize : 10;
  }
  get pageIndex(): number {
    return this.tableSource ? this.tableSource.data.pageIndex : 0;
  }
  // search handler
  private _searchHintType: Table.SearchHintType = 'DEFAULT';
  isSearchError = false;
  get searchHint(): string {
    let hint: string;
    switch (this._searchHintType) {
      case 'SEARCHED': {
        hint = 'Search is already done.';
        break;
      }
      case 'INVALID': {
        hint = 'At least 3 charactor required to search.';
        break;
      }
      case 'DEFAULT':
      default: {
        hint = 'Please tap enter to search.';
        break;
      }
    }
    return hint;
  }
  get placeholder() {
    const search = this.tableSource && this.tableSource.options && this.tableSource.options.search;
    if (search && typeof search === 'string') {
      return search;
    }
    return 'Search';
  }
  get hasSorting(): boolean {
    return this.tableSource && this.tableSource.options && this.tableSource.options.sorting;
  }
  optionEvent: Table.OptionEvent = {
    type: null,
    data: {
      pageIndex: 0,
      pageSize: 10,
      searchText: null,
      filterData: null
    }
  };
  constructor(private _dialog: MatDialog) {
  }

  ngOnInit() {
  }
  templateOutlet(column: Table.Column<any>) {
    if (this.templates) {
      const template = this.templates.find(query => query.name === column.templateBy);
      return template ? template.ref : null;
    }
    return null;
  }
  onHeadSelectionChangeHandler(event: MatCheckboxChange) {
    this.rowCheckBoxes.forEach((checkBox: MatCheckbox) => {
      if ((event.checked && !checkBox.checked) || (!event.checked && checkBox.checked)) {
        checkBox.toggle();
      }
    });
    this._emitSelectEvent();
  }
  onSelectionChangeHandler(event: MatCheckboxChange) {
    const someUnChecked = this.rowCheckBoxes.some(checkBox => !checkBox.checked);
    const everyChecked = this.rowCheckBoxes.every(checkBox => checkBox.checked);
    if ((someUnChecked && this.checkBoxList.first.checked) || (everyChecked && !this.checkBoxList.first.checked)) {
      this.checkBoxList.first.toggle();
    }
    this._emitSelectEvent();
  }
  private _emitSelectEvent() {
    this.selectChange.emit(this.rowCheckBoxes.reduce((total, checkBox, index) => {
      if (checkBox.checked) {
        return [...total, {...this.dataSource.data[index]}];
      }
      return total;
    }, []));
  }


  // filter option
  onFilterHandler() {
    if (this.tableSource && this.tableSource.options && this.tableSource.options.filterComponent) {
      const subscription = this._dialog.open(this.tableSource.options.filterComponent, {
        disableClose: true,
        position: {
          right: '20px'
        },
        autoFocus: false,
        data: this.optionEvent.data.filterData
      }).afterClosed().subscribe((filterData) => {
        if (filterData !== undefined) {
          this.optionEvent = {
            type: 'FILTER',
            data: {
              ...this.optionEvent.data,
              filterData
            }
          };
          this._emitOptionEvent();
        }
        subscription.unsubscribe();
      });
    }
  }


  // search handler
  onFormFieldClickHandler(event: MouseEvent) {
    event.stopPropagation();
  }
  onSearchHandler(event: KeyboardEvent) {
    this.isSearchError = false;
    this._searchHintType = 'DEFAULT';
    const target: HTMLInputElement = event.currentTarget as HTMLInputElement;
    const key = event.code || event.key;
    if (key === 'Enter') {
      const value = target.value.trim();
      if (value.length >= 3 || (value.length === 0 && this.optionEvent.data.searchText)) {
        if (value !== this.optionEvent.data.searchText) {
          this.optionEvent = {
            type: 'SEARCH',
            data: {
              ...this.optionEvent.data,
              searchText: value || null
            }
          };
          this._emitOptionEvent();
        } else {
          this._searchHintType = 'SEARCHED';
        }
      } else {
        this._searchHintType = 'INVALID';
        this.isSearchError = true;
      }
    } else if (key === 'Space' && !target.selectionStart) {
      event.preventDefault();
      // const value = (currentTarget as HTMLInputElement).value;
      // if (value !== value.trimLeft()) {
      //   preventDefault();
      // }

    }
  }
  onPasteHandler({target}: KeyboardEvent) {
    const input = target as HTMLInputElement;
    input.value = input.value.trim();
  }
  // pagination handle
  onPageHandler(event) {
    // const page =
    this.optionEvent = {
      type: 'PAGINATION',
      data: {
        ...this.optionEvent.data,
        pageIndex: event.pageIndex,
        pageSize: event.pageSize
      }
    };
    this._emitOptionEvent();
  }
  private _emitOptionEvent() {
    this.optionChange.emit(this.optionEvent);
  }
}
