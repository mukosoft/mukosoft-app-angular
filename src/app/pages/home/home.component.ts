import { Component, OnInit } from '@angular/core';
import {PROFILE, ProfileService} from "../../services/profile-service/profile.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  name: string = "";

  constructor(public readonly profileService: ProfileService) { }

  ngOnInit(): void {
    this.name = this.profileService.getName()
  }
}
