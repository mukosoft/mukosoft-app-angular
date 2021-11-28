import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {Doctor} from "../../models/my-doc/Doctor";
import {SelfHelpService} from "../../services/self-help-service/self-help.service";
import {MyDocResponse} from "../../models/my-doc/MyDocResponse";

@Component({
    selector: 'app-self-help',
    templateUrl: './self-help.component.html'
})
export class SelfHelpComponent implements OnInit {
    groups: Doctor[] = [];

    constructor(private readonly httpClient: HttpClient, private readonly selfHelpService: SelfHelpService) {
    }

    ngOnInit(): void {
        // this.getSelfHelpData().then((response) => this.groups = response);
        this.getSelfHelpData();
    }

    getSelfHelpData() {
        // TODO: My-Doc API should return a list of selbsthilfegruppen for mukoviszidose
        const groups = ["b22c3ba0-99e1-11eb-9c65-64652e69642d", "ca718dfc-c509-11eb-b6b9-64652e69642d"];

        groups.forEach(id =>
            this.httpClient.get<MyDocResponse>(`https://my-doc.net/?module=mydoc&sektion=show_doctor&uuid=${id}&return=json`)
            .subscribe(response  => {
                const data: Doctor = response.data;
                this.groups = [...this.groups, data];
            })
        )
    }

    addGroupToFavorite(groupId: number) {
        this.selfHelpService.addFavoriteGroup(groupId);
    }

    deleteGroupFromFavorite(groupId: number) {
        this.selfHelpService.deleteGroupFromFavorite(groupId);
    }

    isGroupFavorite(groupId: number) {
        return this.selfHelpService.isGroupFavorite(groupId);
    }
}