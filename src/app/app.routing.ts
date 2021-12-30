import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {AppRoute} from "./models/app-route";
import {HomeComponent} from "./pages/home/home.component";
import {CookbookComponent} from "./pages/cookbook/cookbook.component";
import {MedicineComponent} from "./pages/medicine/medicine.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {CommunityComponent} from "./pages/community/community.component";
import {CommunityDetailComponent} from "./pages/community/community-detail/community-detail.component";

export const appRoutes: AppRoute[] = [
    { route: { path: "", component: HomeComponent}, iconClass: "fi fi-rr-home", visibleOnMenu: true },
    { route: { path: "kochbuch", component: CookbookComponent}, iconClass: "fi fi-rr-carrot", visibleOnMenu: true },
    { route: { path: "medikamente", component: MedicineComponent}, iconClass: "fi fi-rr-medicine", visibleOnMenu: true },
    { route: { path: "selbsthilfegruppen", component: CommunityComponent}, iconClass: "fi fi-rr-following", visibleOnMenu: true },
    { route: { path: "selbsthilfegruppe/:uuid", component: CommunityDetailComponent}, iconClass: "fi fi-rr-following", visibleOnMenu: false },
    { route: { path: "profil", component: ProfileComponent}, iconClass: "fi fi-rr-user", visibleOnMenu: false },
    { route: { path: "einstellungen", component: SettingsComponent}, iconClass: "fi fi-rr-user", visibleOnMenu: false },
];

const routes = appRoutes.map((route) => route.route);

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }