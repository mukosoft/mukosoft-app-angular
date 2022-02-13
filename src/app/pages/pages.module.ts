import { NgModule } from "@angular/core";

import * as fromComponents from "./index";
import { SharedModule } from "../shared/shared.module";
import { BrowserModule } from "@angular/platform-browser";
import { AngularKawaiiModule } from "angular-kawaii";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components],
  imports: [BrowserModule, SharedModule, AngularKawaiiModule, RouterModule],
})
export class PagesModule {}
