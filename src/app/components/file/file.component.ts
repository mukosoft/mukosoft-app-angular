import {Component, Input} from "@angular/core";
import {File} from "../../models/my-doc/File";

@Component({
  selector: "muko-file",
  templateUrl: "./file.component.html"
})
export class FileComponent {
  @Input() file: File = {};

  downloadFile(): void {
    if (this.file._url) {
      window.location.href = this.file._url;
    }
  }
}
