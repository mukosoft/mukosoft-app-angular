import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-community-toolbar",
  templateUrl: "./community-toolbar.component.html",
  styleUrls: ["community-toolbar.component.scss"],
})
export class CommunityToolbarComponent {
  @Output()
  textInputEmitter: EventEmitter<string> = new EventEmitter<string>();

  onTextInput(value: string) {
    this.textInputEmitter.emit(value);
  }
}
