import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html'
})
export class AppBarComponent {
  @Input() iconClass?: string;
  @Input() iconLink?: string;
  @Input() title: string = "";

}