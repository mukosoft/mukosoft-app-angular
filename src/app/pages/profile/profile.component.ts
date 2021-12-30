import { Component, OnInit } from "@angular/core";
import {ProfileService} from "../../services/profile-service/profile.service";

@Component({
  selector: "muko-profile",
  templateUrl: "./profile.component.html"
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

  setProfileImage(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.result) {
        const result = fileReader.result.toString();
        this.profileService.setProfileImage(result);
      }
    }
  }

  getProfileImage(): string {
    return this.profileService.getProfileImage() || ProfileService.getDefaultProfileImage();
  }
}
