import { Component, Input, OnInit } from "@angular/core";
import { ProfileService } from "../profile/services/profile-service/profile.service";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
})
export class TopBarComponent implements OnInit {
  @Input()
  title: string = "";

  @Input()
  rightIconClass?: string;

  @Input()
  leftIconClass?: string;

  @Input()
  rightIconLink?: string;

  @Input()
  leftIconLink?: string;

  profileImage?: string;

  constructor(private readonly profileService: ProfileService) {}

  ngOnInit() {
    this.profileImage = this.profileService.getProfileImage();
  }

  public getProfileImage(): string {
    return this.profileImage || ProfileService.getDefaultProfileImage();
  }
}
