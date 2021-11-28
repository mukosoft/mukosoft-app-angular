import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html'
})
export class AppBarComponent {
  @Input() rightIconClass?: string;
  @Input() leftIconClass?: string;
  @Input() rightIconLink?: string;
  @Input() leftIconLink?: string;
  @Input() title: string = "";
}