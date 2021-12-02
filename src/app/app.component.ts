import { Component } from '@angular/core';
import {AppService} from "./services/app-service/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  introVisible = false;

  constructor(private readonly appService: AppService) {
    appService.initializeApp();
    if (appService.getFirstStart() === "0") {
      this.introVisible = true;
    }
  }
}
