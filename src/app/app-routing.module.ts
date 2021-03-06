import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoute } from "./models/app-route";
import { NotFirstTimeGuard } from "./core/guards/NotFirstTimeGuard";

export const appRoutes: AppRoute[] = [
  // visible in navigation bar
  {
    route: {
      path: "home",
      loadChildren: () =>
        import("./features/home/home.module").then((m) => m.HomeModule),
      canActivate: [NotFirstTimeGuard],
    },
    iconClass: "fi fi-rr-home",
    visibleOnMenu: true,
  },
  {
    route: {
      path: "cookbook",
      loadChildren: () =>
        import("./features/cookbook/cookbook.module").then(
          (m) => m.CookbookModule
        ),
      canActivate: [NotFirstTimeGuard],
    },
    iconClass: "fi fi-rr-carrot",
    visibleOnMenu: true,
  },
  {
    route: {
      path: "medication",
      loadChildren: () =>
        import("./features/medicine/medicine.module").then(
          (m) => m.MedicineModule
        ),
      canActivate: [NotFirstTimeGuard],
    },
    iconClass: "fi fi-rr-medicine",
    visibleOnMenu: true,
  },
  {
    route: {
      path: "community",
      loadChildren: () =>
        import("./features/community/community.module").then(
          (m) => m.CommunityModule
        ),
      canActivate: [NotFirstTimeGuard],
    },
    iconClass: "fi fi-rr-following",
    visibleOnMenu: true,
  },
  // not visible in navigation bar
  {
    route: {
      path: "intro",
      loadChildren: () =>
        import("./features/intro/intro.module").then((m) => m.IntroModule),
    },
    iconClass: "fi fi-rr-home",
    visibleOnMenu: false,
  },
  {
    route: {
      path: "community/:uuid",
      loadChildren: () =>
        import("./features/community/community.module").then(
          (m) => m.CommunityModule
        ),
      canActivate: [NotFirstTimeGuard],
    },
    iconClass: "",
    visibleOnMenu: false,
  },
  {
    route: {
      path: "profile",
      loadChildren: () =>
        import("./features/profile/profile.module").then(
          (m) => m.ProfileModule
        ),
      canActivate: [NotFirstTimeGuard],
    },
    iconClass: "",
    visibleOnMenu: false,
  },
  {
    route: {
      path: "settings",
      loadChildren: () =>
        import("./features/settings/settings.module").then(
          (m) => m.SettingsModule
        ),
      canActivate: [NotFirstTimeGuard],
    },
    iconClass: "",
    visibleOnMenu: false,
  },
];

const routes = appRoutes.map((route) => route.route);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
