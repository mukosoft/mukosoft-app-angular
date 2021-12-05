import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() title = "";
  @Input() secondaryText? = "";
  @Input() image? = "";
  @Input() headerImage? = "";
  @Input() article = "";
  @Input() actions!: TemplateRef<any>;
}
