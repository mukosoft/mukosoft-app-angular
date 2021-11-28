import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MenuBarComponent} from './components/menu-bar/menu-bar.component';
import {CardComponent} from './components/card/card.component';
import {AppRoutingModule} from "./app.routing";

@NgModule({
    declarations: [
        AppComponent,
        MenuBarComponent,
        CardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
