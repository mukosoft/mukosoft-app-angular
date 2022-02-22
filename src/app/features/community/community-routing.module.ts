import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommunityComponent } from "./components/community.component";
import { CommunityDetailComponent } from "./components/community-detail/community-detail.component";

const routes: Routes = [
  { path: "", component: CommunityComponent },
  { path: "community/:id", component: CommunityDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunityRoutingModule {}
