import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {AppRoute} from "./models/app-route"; // CLI imports router

export const appRoutes: AppRoute[] = [
    { route: { path: "", component: AppComponent}, iconClass: "fi fi-rr-home" },
    { route: { path: "kochbuch", component: AppComponent}, iconClass: "fi fi-rr-carrot" },
    { route: { path: "medikamente", component: AppComponent}, iconClass: "fi fi-rr-medicine" },
    { route: { path: "einstellungen", component: AppComponent}, iconClass: "fi fi-rr-settings" },
];

const routes = appRoutes.map((route) => route.route);

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }