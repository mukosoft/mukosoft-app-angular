import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MenuBarComponent} from './components/menu-bar/menu-bar.component';
import {CardComponent} from './components/card/card.component';
import {AppRoutingModule} from "./app.routing";
import { SettingsComponent } from './pages/settings/settings.component';
import {RouterOutlet} from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CookbookComponent } from './pages/cookbook/cookbook.component';
import { MedicineComponent } from './pages/medicine/medicine.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuBarComponent,
        CardComponent,
        SettingsComponent,
        HomeComponent,
        CookbookComponent,
        MedicineComponent,
        AppBarComponent,
        ProfileComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
