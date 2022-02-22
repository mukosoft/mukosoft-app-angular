import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { CommonModule } from "@angular/common";
import { CommunityRoutingModule } from "./community-routing.module";
import { CommunityComponent } from "./components/community.component";
import { CommunityDetailComponent } from "./components/community-detail/community-detail.component";
import { CommunityCardComponent } from "./components/community-card/community-card.component";
import { CommunityToolbarComponent } from "./components/community-toolbar/community-toolbar.component";
import { EmployeeComponent } from "./components/employee/employee.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CommunityRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    CommunityComponent,
    CommunityDetailComponent,
    CommunityCardComponent,
    CommunityToolbarComponent,
    EmployeeComponent,
  ],
})
export class CommunityModule {}
