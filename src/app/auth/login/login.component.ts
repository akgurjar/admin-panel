import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isPasswordVisible = false;
  loginForm: FormGroup;
  constructor(fb: FormBuilder, private _auth: AuthService) {
    this.loginForm = fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      remember: [false, Validators.required]
    });
  }

  ngOnInit() {
  }
  onPasswordVisibilityHandler(event: MouseEvent) {
    event.stopPropagation();
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  onLoginHandler() {
    if (this.loginForm.valid && this.loginForm.enabled) {
      this.loginForm.disable();
      const { username, password } = this.loginForm.value;
      this._auth.login({username, password}).catch((error) => {
        this.loginForm.enable();
        console.log(error);
      });
    }
  }
}
