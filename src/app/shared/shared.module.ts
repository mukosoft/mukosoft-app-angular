import { NgModule } from "@angular/core";

import {
  AvatarComponent,
  FileComponent,
  KawaiiLoadingBarComponent,
} from "./index";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AngularKawaiiModule } from "angular-kawaii";

const components: any[] = [
  AvatarComponent,
  FileComponent,
  KawaiiLoadingBarComponent,
];

const pipes: any[] = [];

const declarations: any[] = [...components, ...pipes];

const modules: any[] = [
  // angular
  CommonModule,
  RouterModule,
  // component
  // AngularKawaiiModule,
];

@NgModule({
  declarations: [...declarations],
  imports: [...modules, AngularKawaiiModule],
  exports: [...modules, ...declarations],
})
export class SharedModule {}
