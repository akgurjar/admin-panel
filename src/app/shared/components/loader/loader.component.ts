import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @HostBinding('class.content--center') _centerContent = true;
  @HostBinding('class.loader--visible')
  get _loaderVisible(): boolean {
    return !!this.visible;
  }
  @Input() visible = true;
  @Input() outlet: RouterOutlet;
  constructor() { }

  ngOnInit() {
    console.log(this.outlet);
  }

}
