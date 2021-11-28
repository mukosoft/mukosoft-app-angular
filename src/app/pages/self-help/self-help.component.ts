import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";

const groups: string[] = ["405668"];

@Component({
  selector: 'app-self-help',
  templateUrl: './self-help.component.html',
  styleUrls: ['./self-help.component.css']
})
export class SelfHelpComponent implements OnInit {
  groups: Object = {};

  constructor(private readonly httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getSelfHelpData().then((response) => this.groups = response);
  }

  async getSelfHelpData() {
    const groupData$ = await this.httpClient.get("https://my-doc.net/?module=mydoc&sektion=show_doctor&id_doctor=405668&return=json");
    return await lastValueFrom(groupData$);
  }



}
