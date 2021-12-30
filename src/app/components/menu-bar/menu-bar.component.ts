import { Component } from "@angular/core";
import {AppRoute} from "../../models/app-route";
import {appRoutes} from "../../app.routing";

@Component({
  selector: "muko-menu-bar",
  templateUrl: "./menu-bar.component.html"
})
export class MenuBarComponent {
  routes: AppRoute[] = appRoutes.filter(route => route.visibleOnMenu);
}
