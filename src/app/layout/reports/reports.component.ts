import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  @HostBinding('class') _class = 'mat-elevation-z1 content--center';
  constructor() { }

  ngOnInit() {
  }

}
