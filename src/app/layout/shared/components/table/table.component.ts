import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TableSource } from '@models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() source: TableSource<any>;
  get dataSource(): MatTableDataSource<any> {
    return new MatTableDataSource(this.source.data)
  }
  get displayedColumns(): string[] {
    return this.source.columns.map(column => column.name);
  }
  constructor() { }

  ngOnInit() {
  }

}
