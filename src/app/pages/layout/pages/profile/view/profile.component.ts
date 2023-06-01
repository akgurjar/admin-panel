import { Component, OnInit, HostBinding } from '@angular/core';
import { ProfileService } from '@profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileName = 'loading...';
  lastLogin: Date = new Date();
  constructor(profileService: ProfileService) {}

  ngOnInit() {}
}
