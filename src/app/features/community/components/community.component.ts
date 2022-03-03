import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Doctor } from "../../../models/my-doc/Doctor";
import { MyDocResponse } from "../../../models/my-doc/MyDocResponse";

@Component({
  selector: "app-community",
  templateUrl: "./community.component.html",
  styleUrls: ["./community.component.scss"],
})
export class CommunityComponent implements OnInit {
  groups: Doctor[] = [];
  filteredGroups: Doctor[] = [];

  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit(): void {
    // this.getSelfHelpData().then((response) => this.groups = response);
    this.getCommunityData();
  }

  /**
   * Requests data for every community in relation to cystic fibrosis.
   */
  getCommunityData() {
    // TODO: My-Doc API should return a list of selbsthilfegruppen for mukoviszidose
    const groups = [
      "b22c3ba0-99e1-11eb-9c65-64652e69642d",
      "ca718dfc-c509-11eb-b6b9-64652e69642d",
      "f8484114-5779-11ec-b3ad-64652e69642d",
      "00051148-dc2e-11e3-9aea-5b61b214e2c0",
    ];

    groups.forEach((id) =>
      this.httpClient
        .get<MyDocResponse>(
          `https://my-doc.net/?module=mydoc&sektion=show_doctor&uuid=${id}&return=json`
        )
        .subscribe((response) => {
          const data: Doctor = response.data;
          this.groups = [...this.groups, data];
          this.filteredGroups = [...this.filteredGroups, data];
        })
    );
  }

  /**
   * Search the community.
   *
   * @param name
   */
  searchCommunity(name: string) {
    const communityName = name.toLowerCase();
    this.filteredGroups = this.groups.filter((group) =>
      group.company.toLowerCase().includes(communityName)
    );
  }
}
