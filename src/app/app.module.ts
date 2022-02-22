import { NgModule } from "@angular/core";
import localeDe from "@angular/common/locales/de";
import localeDeExtra from "@angular/common/locales/extra/de";
import { AppComponent } from "./app.component";
import { CommonModule, registerLocaleData } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { TopBarModule } from "./features/top-bar/top-bar.module";
import { MenuBarModule } from "./features/menu-bar/menu-bar.module";
import { HttpClientModule } from "@angular/common/http";
import { IntroModule } from "./features/intro/intro.module";

// setting locale for angular pipe localization
registerLocaleData(localeDe, localeDeExtra);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopBarModule,
    MenuBarModule,
    HttpClientModule,
    IntroModule,
    // CommonModule,
    // MenuBarModule,
    // RouterModule,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // providers: [{ provide: LOCALE_ID, useValue: "de" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
