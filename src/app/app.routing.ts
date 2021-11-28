import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AppRoute} from "./models/app-route";
import {HomeComponent} from "./pages/home/home.component";
import {CookbookComponent} from "./pages/cookbook/cookbook.component";
import {MedicineComponent} from "./pages/medicine/medicine.component";
import {ProfileComponent} from "./pages/profile/profile.component";

export const appRoutes: AppRoute[] = [
    { route: { path: "", component: HomeComponent}, iconClass: "fi fi-rr-home" },
    { route: { path: "kochbuch", component: CookbookComponent}, iconClass: "fi fi-rr-carrot" },
    { route: { path: "medikamente", component: MedicineComponent}, iconClass: "fi fi-rr-medicine" },
    { route: { path: "profil", component: ProfileComponent}, iconClass: "fi fi-rr-user" },
];

const routes = appRoutes.map((route) => route.route);

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }