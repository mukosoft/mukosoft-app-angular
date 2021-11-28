import { Injectable } from '@angular/core';

export enum PROFILE {
  NAME = "Schleimi",
  ABOUT_ME = "Ich mag besonders gerne ...",
  PROFILE_IMG = ""
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  getName(): string {
    return localStorage.getItem(PROFILE.NAME) || PROFILE.NAME;
  }

  setName(value: string) {
    localStorage.setItem(PROFILE.NAME, value);
  }

  getAboutMe(): string {
    return localStorage.getItem(PROFILE.ABOUT_ME) || PROFILE.ABOUT_ME;
  }

  setAboutMe(value: string) {
    localStorage.setItem(PROFILE.ABOUT_ME, value);
  }

  getProfileImage(): string {
    return localStorage.getItem(PROFILE.PROFILE_IMG) || PROFILE.PROFILE_IMG;
  }

  setProfileImage(value: string) {
    localStorage.setItem(PROFILE.PROFILE_IMG, value);
  }

  static getDefaultProfileImage() {
    return "./../assets/images/profile-default.png";
  }
}
