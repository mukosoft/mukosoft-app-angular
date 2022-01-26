import {Component, Input} from "@angular/core";
import {News} from "../../models/my-doc/News";

@Component({
    selector: "muko-news-card",
    templateUrl: "./news-card.component.html"
})
export class NewsCardComponent {
  @Input() news: News = {
    content: "",
    content_i18n: {de: ""},
    created_at: new Date(),
    groupName: "",
    icon: "",
    id: 0,
    imageUrl: "",
    name: "",
    name_i18n: {de: ""},
    updated_at: new Date()
  };
}

