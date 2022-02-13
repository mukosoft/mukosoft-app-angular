import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import localeDe from "@angular/common/locales/de";
import localeDeExtra from "@angular/common/locales/extra/de";
import { AppComponent } from "./app.component";
import { AngularKawaiiModule } from "angular-kawaii";
import { RouterModule } from "@angular/router";
import { registerLocaleData } from "@angular/common";
import { SharedModule } from "./shared/shared.module";
import { PagesModule } from "./pages/pages.module";

// setting locale for angular pipe localization
registerLocaleData(localeDe, localeDeExtra);

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    AngularKawaiiModule,
    SharedModule,
    PagesModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: LOCALE_ID, useValue: "de" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
