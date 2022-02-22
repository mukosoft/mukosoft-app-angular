import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { CommonModule } from "@angular/common";
import { MenuBarComponent } from "./menu-bar.component";
import { RouterModule } from "@angular/router";

const components: any[] = [MenuBarComponent];

const modules: any[] = [CommonModule, RouterModule];

@NgModule({
  declarations: [...components],
  imports: [...modules, SharedModule],
  exports: [...modules, ...components],
})
export class MenuBarModule {}
