import { Component } from '@angular/core';
import { LoaderService } from '@loader';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isLoading = false;
  constructor(loader: LoaderService) {
    loader.changes.subscribe(status => this.isLoading = status);
  }
}
