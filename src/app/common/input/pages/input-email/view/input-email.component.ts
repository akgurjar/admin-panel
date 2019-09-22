import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss']
})
export class InputEmailComponent implements OnInit {
  @Input() control = new FormControl(null);
  @Input() placeholder = 'Email';
  @Input() fieldName = 'Email';
  constructor() { }

  ngOnInit() {
  }

}
