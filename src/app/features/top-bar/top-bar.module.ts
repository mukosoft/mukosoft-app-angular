import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopBarComponent } from "./top-bar.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [TopBarComponent],
})
export class TopBarModule {}
