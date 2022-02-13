import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";

@Component({
  selector: "muko-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  isFirstStart = true;
  introVisible = false;

  constructor(private readonly appService: AppService) {}

  ngOnInit() {
    this.isFirstStart = this.appService.isFirstStart();
    if (this.isFirstStart) {
      this.introVisible = true;
    } else {
      this.introVisible = false;
    }
  }
}
