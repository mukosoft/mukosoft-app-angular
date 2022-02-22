import { NgModule } from "@angular/core";
import localeDe from "@angular/common/locales/de";
import localeDeExtra from "@angular/common/locales/extra/de";
import { AppComponent } from "./app.component";
import { registerLocaleData } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { TopBarModule } from "./features/top-bar/top-bar.module";
import { MenuBarModule } from "./features/menu-bar/menu-bar.module";
import { HttpClientModule } from "@angular/common/http";
import { IntroModule } from "./features/intro/intro.module";
import { NotFirstTimeGuard } from "./core/guards/NotFirstTimeGuard";

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
  ],
  bootstrap: [AppComponent],
  providers: [NotFirstTimeGuard],
})
export class AppModule {}
