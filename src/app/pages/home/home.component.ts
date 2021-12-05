import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../services/profile-service/profile.service";
import {MyDocResponse} from "../../models/my-doc/MyDocResponse";
import {HttpClient} from "@angular/common/http";
import {CommunityService} from "../../services/community-service/community.service";
import {NewsItem} from "../../models/my-doc/NewsItem";
import {FormatService} from "../../services/format-service/format.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    name: string = "";
    news: NewsItem[] = [];
    isLoading = true;

    constructor(public readonly profileService: ProfileService,
                private readonly httpClient: HttpClient,
                private readonly communityService: CommunityService,
                public readonly formatService: FormatService) {
    }

    ngOnInit(): void {
        this.name = this.profileService.getName();
        this.communityService.getCommunityNews().subscribe((myDocResponses: MyDocResponse[]) => {
            myDocResponses.forEach(response => {
                if (response.data["DoctorNewsItems"]) {
                    this.news = this.news.concat(response.data["DoctorNewsItems"]);
                }
            });
            this.isLoading = false;
        });
    }

    userHasNews() {
        return this.communityService.getGroups().length > 0;
    }
}
