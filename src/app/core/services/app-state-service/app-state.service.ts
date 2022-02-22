import { Injectable } from "@angular/core";

enum APP {
  FIRST_START = "FIRST_START",
}

@Injectable({
  providedIn: "root",
})
export class AppStateService {
  setFirstStart(value: string) {
    localStorage.setItem(APP.FIRST_START, value);
  }

  isFirstStart(): boolean {
    return (
      localStorage.getItem(APP.FIRST_START) === "true" ||
      localStorage.getItem(APP.FIRST_START) === null
    );
  }
}
