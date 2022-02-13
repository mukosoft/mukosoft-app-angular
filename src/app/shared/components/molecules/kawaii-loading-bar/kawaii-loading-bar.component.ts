import {Component, Input} from "@angular/core";

@Component({
  selector: "muko-kawaii-loading-bar",
  templateUrl: "./kawaii-loading-bar.component.html"
})
export class KawaiiLoadingBarComponent {
  @Input() isLoading = true;
  @Input() loadingFailedMessage = "Fehler beim Laden"
}
