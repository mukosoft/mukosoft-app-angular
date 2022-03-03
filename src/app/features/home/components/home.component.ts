import { Component, OnChanges, OnInit } from "@angular/core";
import { ProfileService } from "../../profile/services/profile-service/profile.service";
import { MyDocResponse } from "../../../models/my-doc/MyDocResponse";
import { HttpClient } from "@angular/common/http";
import { CommunityService } from "../../community/services/community.service";
import { News } from "../../../models/my-doc/News";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  name: string = "";

  news: News[] = [];

  isLoading = true;

  hasNews = false;

  constructor(
    public readonly profileService: ProfileService,
    private readonly httpClient: HttpClient,
    private readonly communityService: CommunityService
  ) {}

  ngOnInit(): void {
    this.name = this.profileService.getName();
    this.loadNews();
  }

  private loadNews() {
    this.communityService
      .getCommunityNews()
      .subscribe((myDocResponses: MyDocResponse[]) => {
        // todo: implement mapping service
        myDocResponses.forEach((response) => {
          if (response.success) {
            response.data.DoctorNewsItems.forEach((news: any) => {
              const communityNews: News = {
                icon: response.data.icon,
                groupName: response.data.company,
                id: news.id,
                name: news.name,
                content: news.content,
                imageUrl: news.url_picture,
                name_i18n: news.name_i18n,
                content_i18n: news.content_i18n,
                created_at: news.created_at,
                updated_at: news.updated_at,
              };
              this.news = [...this.news, communityNews];
            });
          }
        });
        this.isLoading = false;
        this.hasNews = this.news.length > 0;
      });
  }
}
