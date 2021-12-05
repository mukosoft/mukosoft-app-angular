// angular
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

// modules
import {AppRoutingModule} from "./app.routing";

// components
import {AppComponent} from './app.component';
import {MenuBarComponent} from './components/menu-bar/menu-bar.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { IntroComponent } from './components/intro/intro.component';
import { CommunityNewsCardComponent } from './components/card/community-news-card/community-news-card.component';

// pages
import { CommunityDetailComponent } from './pages/community/community-detail/community-detail.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HomeComponent } from './pages/home/home.component';
import { CookbookComponent } from './pages/cookbook/cookbook.component';
import { MedicineComponent } from './pages/medicine/medicine.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CommunityComponent } from './pages/community/community.component';
import { KawaiiLoadingBarComponent } from './components/kawaii-loading-bar/kawaii-loading-bar.component';
import {AngularKawaiiModule} from "angular-kawaii";

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
        CommunityNewsCardComponent,
        KawaiiLoadingBarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AngularKawaiiModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
