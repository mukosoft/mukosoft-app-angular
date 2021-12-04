import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Doctor} from "../../models/my-doc/Doctor";
import {CommunityService} from "../../services/community-service/community.service";
import {MyDocResponse} from "../../models/my-doc/MyDocResponse";
import {Router} from "@angular/router";

@Component({
    selector: 'app-self-help',
    templateUrl: './community.component.html'
})
export class CommunityComponent implements OnInit {
    groups: Doctor[] = [];

    constructor(private readonly httpClient: HttpClient,
                private readonly selfHelpService: CommunityService,
                private readonly router: Router) {
    }

    ngOnInit(): void {
        // this.getSelfHelpData().then((response) => this.groups = response);
        this.getSelfHelpData();
    }

    getSelfHelpData() {
        // TODO: My-Doc API should return a list of selbsthilfegruppen for mukoviszidose
        const groups = [
            "b22c3ba0-99e1-11eb-9c65-64652e69642d",
            "ca718dfc-c509-11eb-b6b9-64652e69642d"
        ];

        groups.forEach(id =>
            this.httpClient.get<MyDocResponse>(`https://my-doc.net/?module=mydoc&sektion=show_doctor&uuid=${id}&return=json`)
            .subscribe(response  => {
                const data: Doctor = response.data;
                this.groups = [...this.groups, data];
            })
        )
    }

    addGroupToFavorite(groupId: string) {
        this.selfHelpService.addFavoriteGroup(groupId);
    }

    deleteGroupFromFavorite(groupId: string) {
        this.selfHelpService.deleteGroupFromFavorite(groupId);
    }

    isGroupFavorite(groupId: string) {
        return this.selfHelpService.isGroupFavorite(groupId);
    }

    renderLocation(group: Doctor): string {
        let locationString = "";

        if (group.city) locationString += group.city;
        if (group.state && group.city) locationString += ", ";
        if (group.state) locationString += group.state;

        return locationString;
    }
}