import { Component, OnInit, HostBinding } from '@angular/core';
import { ProfileService } from '@profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @HostBinding('class.mat-elevation-z1')
  readonly elevation = true;
  profileName = 'loading...';
  constructor(profileService: ProfileService) {}

  ngOnInit() {}
}
