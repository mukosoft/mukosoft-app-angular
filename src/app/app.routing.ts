import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AppRoute} from "./models/app-route";
import {HomeComponent} from "./pages/home/home.component";
import {CookbookComponent} from "./pages/cookbook/cookbook.component";
import {MedicineComponent} from "./pages/medicine/medicine.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {SelfHelpComponent} from "./pages/self-help/self-help.component";

export const appRoutes: AppRoute[] = [
    { route: { path: "", component: HomeComponent}, iconClass: "fi fi-rr-home", visibleOnMenu: true },
    { route: { path: "kochbuch", component: CookbookComponent}, iconClass: "fi fi-rr-carrot", visibleOnMenu: true },
    { route: { path: "medikamente", component: MedicineComponent}, iconClass: "fi fi-rr-medicine", visibleOnMenu: true },
    { route: { path: "selbsthilfegruppen", component: SelfHelpComponent}, iconClass: "fi fi-rr-following", visibleOnMenu: true },
    { route: { path: "profil", component: ProfileComponent}, iconClass: "fi fi-rr-user", visibleOnMenu: false },
    { route: { path: "einstellungen", component: SettingsComponent}, iconClass: "fi fi-rr-user", visibleOnMenu: false },
];

const routes = appRoutes.map((route) => route.route);

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }