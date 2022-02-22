import { Component, Input } from "@angular/core";
import { Doctor } from "../../../../models/my-doc/Doctor";
import { CommunityService } from "../../services/community.service";

@Component({
  selector: "app-community-card",
  templateUrl: "./community-card.component.html",
})
export class CommunityCardComponent {
  @Input() community: Doctor = {
    address_supplement: undefined,
    company: "",
    country: "",
    firstname: "",
    id: 0,
    is_confirmed: false,
    is_visible: false,
    lastname: "",
    salutation: "",
    uuid: "",
  };

  constructor(private readonly communityService: CommunityService) {}

  addGroupToFavorite(groupId: string): void {
    this.communityService.addFavoriteGroup(groupId);
  }

  deleteGroupFromFavorite(groupId: string) {
    this.communityService.deleteGroupFromFavorite(groupId);
  }

  isGroupFavorite(groupId: string): boolean {
    return this.communityService.isGroupFavorite(groupId);
  }
}
