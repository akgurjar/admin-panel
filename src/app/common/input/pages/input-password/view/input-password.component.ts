import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent implements OnInit {
  @Input() control = new FormControl(null);
  @Input() placeholder = 'Password';
  @Input() fieldName = 'Password';
  isPasswordVisible = true;
  get inputType(): 'text' | 'password' {
    return this.isPasswordVisible ? 'text' : 'password';
  }
  constructor() { }

  ngOnInit() {
  }
  onTogglePasswordVisibilty(event: MouseEvent) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
