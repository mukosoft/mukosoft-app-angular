import { NgModule } from "@angular/core";

import * as fromComponents from "./index";
import { AppRoutingModule } from "../app.routing";
import { BrowserModule } from "@angular/platform-browser";
import { AngularKawaiiModule } from "angular-kawaii";

@NgModule({
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components],
  imports: [AppRoutingModule, BrowserModule, AngularKawaiiModule],
})
export class SharedModule {}
