import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../services/profile-service/profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  name: string = "";
  likes: string = "";

  nameEditMode = false;
  aboutMeEditMode = false;

  constructor(public readonly profileService: ProfileService) { }

  ngOnInit(): void {
    this.name = this.profileService.getName();
    this.likes = this.profileService.getAboutMe();
  }

  setName(value: string) {
    this.profileService.setName(value);
    this.name = this.profileService.getName();
  }

  setAboutMe(value: string) {
    this.profileService.setAboutMe(value);
    this.likes = this.profileService.getAboutMe();
  }
}
