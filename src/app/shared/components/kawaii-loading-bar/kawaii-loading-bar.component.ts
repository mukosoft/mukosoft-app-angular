import { Component, Input } from "@angular/core";

@Component({
  selector: "app-kawaii-loading-bar",
  templateUrl: "./kawaii-loading-bar.component.html",
  styleUrls: ["./kawaii-loading-bar.component.scss"],
})
export class KawaiiLoadingBarComponent {
  @Input() isLoading = true;
  @Input() loadingFailedMessage = "Fehler beim Laden";
}
