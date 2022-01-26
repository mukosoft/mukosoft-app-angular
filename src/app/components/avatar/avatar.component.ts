import {Component, Input} from "@angular/core";

@Component({
  selector: "muko-avatar",
  template: "<img class='avatar' [class]='size' [src]='img' alt='avatar' />",
  styleUrls: ["./avatar.component.scss"]
})
export class AvatarComponent {
  @Input() img: string = "";
  @Input() size: "sm" | "md" | "lg" = "md";
}
