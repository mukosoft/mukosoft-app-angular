import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: "muko-community-toolbar",
  templateUrl: "./community-toolbar.component.html"
})
export class CommunityToolbarComponent {
  @Output() textInputEmitter: EventEmitter<string> = new EventEmitter<string>();

  onTextInput(value: string) {
    this.textInputEmitter.emit(value);
  }
}
