import { Injectable } from "@angular/core";
import { MyDocResponse } from "../../models/my-doc/MyDocResponse";
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";

export enum SELF_HELP {
  FAVOURITE_GROUPS = "FAVORITE_GROUPS",
}

/**
 * CommunityService
 *
 * This service handles news and content from the community.
 */
@Injectable({
  providedIn: "root",
})
export class CommunityService {
  constructor(private readonly httpClient: HttpClient) {}

  addFavoriteGroup(groupId: string) {
    const favGroups = localStorage.getItem(SELF_HELP.FAVOURITE_GROUPS) || "";
    let favGroupsArray: string[] = [];

    if (favGroups !== "") {
      favGroupsArray = favGroups.split(",");
    }

    // group id is not favorite already
    if (!this.isGroupFavorite(groupId)) {
      favGroupsArray = [...favGroupsArray, groupId];
    }

    localStorage.setItem(SELF_HELP.FAVOURITE_GROUPS, favGroupsArray.toString());
  }

  deleteGroupFromFavorite(groupId: string) {
    const favGroups = localStorage.getItem(SELF_HELP.FAVOURITE_GROUPS) || "";
    let favGroupsArray = favGroups.split(",");

    if (this.isGroupFavorite(groupId)) {
      favGroupsArray = favGroupsArray.filter((id) => id !== groupId);
    }

    localStorage.setItem(SELF_HELP.FAVOURITE_GROUPS, favGroupsArray.toString());
  }

  isGroupFavorite(groupId: string): boolean {
    const favGroups = localStorage.getItem(SELF_HELP.FAVOURITE_GROUPS) || "";
    let favGroupsArray: string[] = [];

    if (favGroups !== "") {
      favGroupsArray = favGroups.split(",");
    }

    return favGroupsArray.indexOf(groupId) >= 0;
  }

  getGroups(): string[] {
    const groups = localStorage.getItem(SELF_HELP.FAVOURITE_GROUPS) || "";
    let groupsArr: string[] = [];
    if (groups !== "") {
      groupsArr = groups.split(",");
    }
    return groupsArr;
  }

  getCommunityNews(): any {
    return forkJoin(
      this.getGroups().map((uuid) =>
        this.httpClient.get<MyDocResponse>(
          `https://my-doc.net/?module=mydoc&sektion=show_doctor&uuid=${uuid}&return=json`
        )
      )
    );
  }
}
