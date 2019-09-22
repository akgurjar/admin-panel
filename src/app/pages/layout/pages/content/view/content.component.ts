import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @HostBinding('class') elevation = 'mat-elevation-z1 content--center';
  constructor() { }

  ngOnInit() {
  }

}
