import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  visibility = {
    password: false,
    confirmPassword: false
  };
  constructor() { }

  ngOnInit() {
  }
  onVisibilityHandler(event: MouseEvent, field: string) {
    event.stopPropagation();
    this.visibility[field] = !this.visibility[field];
  }
}
