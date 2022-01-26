import {Component, Input, OnInit} from "@angular/core";
import {ProfileService} from "../../services/profile-service/profile.service";

@Component({
    selector: "muko-app-bar",
    templateUrl: "./app-bar.component.html"
})
export class AppBarComponent implements OnInit {

    @Input()
    title: string = "";

    @Input()
    rightIconClass?: string;

    @Input()
    leftIconClass?: string;

    @Input()
    rightIconLink?: string;

    @Input()
    leftIconLink?: string;

    profileImage?: string;

    constructor(
        private readonly profileService: ProfileService
    ) {
    }

    ngOnInit() {
        this.profileImage = this.profileService.getProfileImage();
    }

    public getProfileImage(): string {
        return this.profileImage || ProfileService.getDefaultProfileImage();
    }
}