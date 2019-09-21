import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {
  isLoading = false;
  constructor(loader: LoaderService) {
    loader.changes.subscribe(status => this.isLoading = status);
  }
}
