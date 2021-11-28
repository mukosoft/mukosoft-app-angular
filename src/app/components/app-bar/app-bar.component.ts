import {Component, Input} from '@angular/core';
import {ProfileService} from "../../services/profile-service/profile.service";

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html'
})
export class AppBarComponent {
  @Input() profileImage?: string;
  @Input() rightIconClass?: string;
  @Input() leftIconClass?: string;
  @Input() rightIconLink?: string;
  @Input() leftIconLink?: string;
  @Input() title: string = "";

  public getProfileImage(): string {
    return this.profileImage || ProfileService.getDefaultProfileImage();
  }
}