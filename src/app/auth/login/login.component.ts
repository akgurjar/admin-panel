import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isPasswordVisible = false;
  constructor() { }

  ngOnInit() {
  }
  onPasswordVisibilityHandler(event: MouseEvent) {
    event.stopPropagation();
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
