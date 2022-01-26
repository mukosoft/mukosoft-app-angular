import {Component, OnInit} from "@angular/core";
import {ProfileService} from "../../services/profile-service/profile.service";
import {MyDocResponse} from "../../models/my-doc/MyDocResponse";
import {HttpClient} from "@angular/common/http";
import {CommunityService} from "../../services/community-service/community.service";
import {News} from "../../models/my-doc/News";

@Component({
  selector: "muko-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  name: string = "";
  news: News[] = [];
  isLoading = true;

  constructor(public readonly profileService: ProfileService,
                private readonly httpClient: HttpClient,
                private readonly communityService: CommunityService) {
  }

  ngOnInit(): void {
    this.name = this.profileService.getName();
    this.communityService.getCommunityNews().subscribe((myDocResponses: MyDocResponse[]) => {
      myDocResponses.forEach(response => {
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
    });
  }

  userHasNews() {
    return this.communityService.getGroups().length > 0;
  }
}
