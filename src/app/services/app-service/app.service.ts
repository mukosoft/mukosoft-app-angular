import { Injectable } from '@angular/core';

enum APP {
  FIRST_START = "FIRST_START"
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  initializeApp() {
    if (this.getFirstStart() !== "1") {
      this.setFirstStart("0")
    }
  }

  getFirstStart() {
    return localStorage.getItem(APP.FIRST_START);
  }

  setFirstStart(value: string) {
    localStorage.setItem(APP.FIRST_START, value);
  }
}
