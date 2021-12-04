import {Component, Input} from '@angular/core';
import {NewsItem} from "../../../models/my-doc/NewsItem";

@Component({
  selector: 'app-community-news-card',
  templateUrl: './community-news-card.component.html'
})
export class CommunityNewsCardComponent {
  @Input() news!: NewsItem;

  constructor() { }

  renderNewsText(text: string): string {
    return `${text.slice(0, 200)}...`;
  }

}
