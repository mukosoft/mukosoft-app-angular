import { Injectable } from '@angular/core';

enum SETTINGS {
  "LANGUAGE" = "LANGUAGE"
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  setLanguage(language: string) {
    localStorage.setItem(SETTINGS.LANGUAGE, language);
  }
}
