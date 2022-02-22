import { Component, Input } from "@angular/core";
import { File } from "../../../models/my-doc/File";

@Component({
  selector: "app-file",
  template:
    "<button class='btn btn-primary' (click)='downloadFile()'>{{file.filename}}</button>",
})
export class FileComponent {
  @Input()
  file: File = {};

  downloadFile(): void {
    if (this.file._url) {
      window.location.href = this.file._url;
    }
  }
}
