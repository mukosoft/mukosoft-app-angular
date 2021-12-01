import { Injectable } from '@angular/core';

export enum PROFILE {
  NAME = "NAME",
  ABOUT_ME = "ABOUT_ME",
  PROFILE_IMG = "PROFILE_IMG"
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  getName(): string {
    return localStorage.getItem(PROFILE.NAME) || "Schleimii";
  }

  setName(value: string) {
    localStorage.setItem(PROFILE.NAME, value);
  }

  getAboutMe(): string {
    return localStorage.getItem(PROFILE.ABOUT_ME) || "Ich mag besonders gerne ...";
  }

  setAboutMe(value: string) {
    localStorage.setItem(PROFILE.ABOUT_ME, value);
  }

  getProfileImage(): string {
    return localStorage.getItem(PROFILE.PROFILE_IMG) || ProfileService.getDefaultProfileImage();
  }

  setProfileImage(value: string) {
    localStorage.setItem(PROFILE.PROFILE_IMG, value);
  }

  static getDefaultProfileImage() {
    return "./../assets/images/profile-default.png";
  }
}
