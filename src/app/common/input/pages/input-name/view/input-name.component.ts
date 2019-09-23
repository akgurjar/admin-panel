import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.scss']
})
export class InputNameComponent implements OnInit {
  @Input() control = new FormControl(null);
  @Input() placeholder = 'Name';
  @Input() fieldName = 'Name';
  constructor() { }

  ngOnInit() {
  }

}
