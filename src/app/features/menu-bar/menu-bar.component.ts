import { Component } from "@angular/core";
import { AppRoute } from "../../models/app-route";
import { appRoutes } from "../../app-routing.module";

@Component({
  selector: "app-menu-bar",
  templateUrl: "./menu-bar.component.html",
  styleUrls: ["./menu-bar.component.scss"],
})
export class MenuBarComponent {
  routes: AppRoute[] = appRoutes.filter((route) => route.visibleOnMenu);
}
