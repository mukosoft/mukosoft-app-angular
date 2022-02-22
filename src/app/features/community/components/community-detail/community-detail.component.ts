import { Component, OnInit } from "@angular/core";
import { MyDocResponse } from "../../../../models/my-doc/MyDocResponse";
import { Doctor } from "../../../../models/my-doc/Doctor";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-self-help-detail",
  templateUrl: "./community-detail.component.html",
  styleUrls: ["./community-detail.component.scss"],
})
export class CommunityDetailComponent implements OnInit {
  uuid: string = "";
  data?: Doctor;
  filesVisible: boolean = false;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.uuid = params["uuid"];
    });
    this.getGroupData();
  }

  getGroupData(): void {
    this.httpClient
      .get<MyDocResponse>(
        `https://my-doc.net/?module=mydoc&sektion=show_doctor&uuid=${this.uuid}&return=json`
      )
      .subscribe((response) => {
        const data: Doctor = response.data;
        this.data = data;
      });
  }

  showFiles(): void {
    this.filesVisible = !this.filesVisible;
  }

  hasFiles(): boolean {
    return !!(this.data?.File && this.data.File.length > 0);
  }
}
