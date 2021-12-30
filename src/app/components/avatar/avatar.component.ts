import {Component, Input} from "@angular/core";

@Component({
  selector: "muko-avatar",
  templateUrl: "./avatar.component.html",
  styleUrls: ["./avatar.component.scss"]
})
export class AvatarComponent {
  @Input() img: string = "";
  @Input() size: "sm" | "md" | "lg" = "md";
}
