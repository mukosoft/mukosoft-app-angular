import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./components/home.component";
import { NewsCardComponent } from "./components/news-card/news-card.component";
import { AngularKawaiiModule } from "angular-kawaii";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [HomeComponent, NewsCardComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    CommonModule,
    RouterModule,
    AngularKawaiiModule,
  ],
})
export class HomeModule {}
