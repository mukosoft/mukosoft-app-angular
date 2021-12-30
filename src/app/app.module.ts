// angular
import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import localeDe from "@angular/common/locales/de";
import localeDeExtra from "@angular/common/locales/extra/de";

// modules
import {AppRoutingModule} from "./app.routing";

// components
import {AppComponent} from "./app.component";
import {MenuBarComponent} from "./components/menu-bar/menu-bar.component";
import { AppBarComponent } from "./components/app-bar/app-bar.component";
import { IntroComponent } from "./components/intro/intro.component";

// pages
import { CommunityDetailComponent } from "./pages/community/community-detail/community-detail.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { HomeComponent } from "./pages/home/home.component";
import { CookbookComponent } from "./pages/cookbook/cookbook.component";
import { MedicineComponent } from "./pages/medicine/medicine.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { CommunityComponent } from "./pages/community/community.component";
import { KawaiiLoadingBarComponent } from "./components/kawaii-loading-bar/kawaii-loading-bar.component";
import {AngularKawaiiModule} from "angular-kawaii";
import { CommunityToolbarComponent } from "./components/community-toolbar/community-toolbar.component";
import { NewsCardComponent } from "./components/news-card/news-card.component";
import { CommunityCardComponent } from "./components/community-card/community-card.component";
import {RouterModule} from "@angular/router";
import {registerLocaleData} from "@angular/common";
import { AvatarComponent } from './components/avatar/avatar.component';
import { FileComponent } from './components/file/file.component';
import { EmployeeComponent } from './components/employee/employee.component';

// setting locale for angular pipe localization
registerLocaleData(localeDe, localeDeExtra);

@NgModule({
    declarations: [
        AppComponent,
        MenuBarComponent,
        SettingsComponent,
        HomeComponent,
        CookbookComponent,
        MedicineComponent,
        AppBarComponent,
        ProfileComponent,
        CommunityComponent,
        IntroComponent,
        CommunityDetailComponent,
        KawaiiLoadingBarComponent,
        CommunityToolbarComponent,
        NewsCardComponent,
        CommunityCardComponent,
        AvatarComponent,
        FileComponent,
        EmployeeComponent,
    ],
    imports: [
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AngularKawaiiModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [{provide: LOCALE_ID, useValue: "de" }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
