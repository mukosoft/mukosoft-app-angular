import { Component, OnInit } from "@angular/core";
import { AppStateService } from "@core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  isFirstStart = true;

  constructor(
    private readonly appService: AppStateService,
    private readonly routerService: Router
  ) {}

  ngOnInit() {
    this.isFirstStart = this.appService.isFirstStart();

    if (this.isFirstStart) {
      this.routerService.navigate(["intro"]);
    } else {
      this.routerService.navigate(["home"]);
    }
  }
}
