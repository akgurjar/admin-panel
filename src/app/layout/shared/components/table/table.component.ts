import {
  Component,
  OnInit,
  Input,
  Output,
  ContentChild,
  TemplateRef,
  ViewChildren,
  QueryList,
  EventEmitter
} from '@angular/core';
import { MatTableDataSource, MatCheckboxChange, MatCheckbox } from '@angular/material';
import { TableSource } from '@models';
import { ForDirective } from '../../directives/for.directive';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() source: TableSource<any>;
  @Output() checkChange: EventEmitter<any> = new EventEmitter();
  get dataSource(): MatTableDataSource<any> {
    return new MatTableDataSource(this.source.data);
  }
  get displayedColumns(): string[] {
    const columns = this.source.columns.map(column => column.name);
    const selectionColumns = true ? ['selection', ...columns] : columns;
    const actionColumns = true ? [...selectionColumns, 'actions'] : selectionColumns;
    return actionColumns;
  }
  @ContentChild(ForDirective) actions: ForDirective;
  @ViewChildren(MatCheckbox) checkBoxList: QueryList<MatCheckbox>;
  get checkBoxes(): MatCheckbox[] {
    return this.checkBoxList.toArray();
  }
  get rowCheckBoxes(): MatCheckbox[] {
    return this.checkBoxes.filter((_, index: number) => index > 0);
  }
  constructor() {
  }

  ngOnInit() {
  }
  onHeadSelectionChangeHandler(event: MatCheckboxChange) {
    this.rowCheckBoxes.forEach((checkBox: MatCheckbox) => {
      if ((event.checked && !checkBox.checked) || (!event.checked && checkBox.checked)) {
        checkBox.toggle();
      }
    });
  }
  onSelectionChangeHandler(event: MatCheckboxChange) {
    const someUnChecked = this.rowCheckBoxes.some(checkBox => !checkBox.checked);
    const everyChecked = this.rowCheckBoxes.every(checkBox => checkBox.checked);
    if ((someUnChecked && this.checkBoxList.first.checked) || (everyChecked && !this.checkBoxList.first.checked)) {
      this.checkBoxList.first.toggle();
    }
  }
  private _emitChangeEvent() {
    this.checkChange.emit(this.rowCheckBoxes.map(checkBox => checkBox.checked));
  }
}
