import { Component } from "@angular/core";
import { Intro } from "../../models/intro";
import { AppStateService } from "@core";
import { ProfileService } from "../profile/services/profile-service/profile.service";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
})
export class IntroComponent {
  introItems: Intro[] = [
    {
      heading: "Hallo",
      text: "Die MukoSoft App soll euch in eurem Alltag unterstützen.",
    },
    {
      heading: "Medikamente verwalten",
      text: "Verwaltet eure Medikamente und werdet an Sie erinnert.",
    },
    {
      heading: "Vereinen folgen",
      text: "Mukoviszidose bedeutet auch, sich auszutauschen. Folgt Vereinen oder ... und erhaltet von Ihnen Informationen zu Events oder anderem.",
    },
    {
      heading: "Datenschutz",
      text: "Datenschutz ist das A und O. Die Informationen die Ihr in der App angebt, bleiben auch auf der App!",
    },
    {
      heading: "Fertig",
      text: "Viel Spaß mit der App! Über Feedback würde ich mich freuen. ~ Dominique Börner",
    },
  ];

  step: number = 0;

  constructor(
    private readonly appService: AppStateService,
    private readonly profileService: ProfileService
  ) {}

  getCurrentHeading() {
    return this.introItems[this.step].heading;
  }

  getCurrentText() {
    return this.introItems[this.step].text;
  }

  isNotLast() {
    return this.step < this.introItems.length - 1;
  }

  nextStep() {
    if (this.step < this.introItems.length - 1) {
      this.step++;
    }
  }

  isNotFirst() {
    return this.step > 0;
  }

  previousStep() {
    if (this.step > 0) {
      this.step--;
    }
  }

  finishIntro() {
    this.appService.setFirstStart("false");
    this.profileService.initializeProfile();
    window.location.reload();
  }
}
