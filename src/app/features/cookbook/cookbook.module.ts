import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { CommonModule } from "@angular/common";
import { CookbookRoutingModule } from "./cookbook-routing.module";
import { CookbookComponent } from "./cookbook.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [CookbookComponent],
  imports: [CommonModule, SharedModule, RouterModule, CookbookRoutingModule],
})
export class CookbookModule {}
