import {Injectable} from '@angular/core';

export enum SELF_HELP {
    FAVOURITE_GROUPS = "FAVORITE_GROUPS"
}

@Injectable({
    providedIn: 'root'
})
export class SelfHelpService {

    addFavoriteGroup(groupId: number) {
        const favGroups = localStorage.getItem(SELF_HELP.FAVOURITE_GROUPS) || "";
        let favGroupsArray = favGroups.split(",");

        // group id is not favorite already
        if (!this.isGroupFavorite(groupId)) {
            favGroupsArray = [...favGroupsArray, groupId.toString()];
        }

        localStorage.setItem(SELF_HELP.FAVOURITE_GROUPS, favGroupsArray.toString());
    }

    deleteGroupFromFavorite(groupId: number) {
        const favGroups = localStorage.getItem(SELF_HELP.FAVOURITE_GROUPS) || "";
        let favGroupsArray = favGroups.split(",");

      if (this.isGroupFavorite(groupId)) {
        favGroupsArray = favGroupsArray.filter((id) => id !== groupId.toString());
      }

      localStorage.setItem(SELF_HELP.FAVOURITE_GROUPS, favGroupsArray.toString());
    }

    isGroupFavorite(groupId: number): boolean {
        const favGroups = localStorage.getItem(SELF_HELP.FAVOURITE_GROUPS) || "";
        let favGroupsArray = favGroups.split(",");

        return favGroupsArray.indexOf(groupId.toString()) === 1;
    }
}
