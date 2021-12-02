import { Component } from '@angular/core';
import {Intro} from "../../models/intro";
import {AppService} from "../../services/app-service/app.service";
import {ProfileService} from "../../services/profile-service/profile.service";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html'
})
export class IntroComponent {
  introItems: Intro[] = [];
  step: number = 0;

  constructor(private readonly appService: AppService,
              private readonly profileService: ProfileService) {
    this.introItems = [
      { heading: "Hallo", text: "Die MukoSoft App soll euch in eurem Alltag unterstützen." },
      { heading: "Medikamente verwalten", text: "Verwaltet eure Medikamente und werdet an Sie erinnert." },
      { heading: "Vereinen folgen", text: "Mukoviszidose bedeutet auch, sich auszutauschen. Folgt Vereinen oder ... und erhaltet von Ihnen Informationen zu Events oder anderem." },
      { heading: "Datenschutz", text: "Datenschutz ist das A und O. Die Informationen die Ihr in der App angebt, bleiben auch auf der App!" },
      { heading: "Fertig", text: "Viel Spaß mit der App! Über Feedback würde ich mich freuen. ~ Dominique Börner" },
    ]
  }

  getCurrentHeading() {
    return this.introItems[this.step].heading;
  }

  getCurrentText() {
    return this.introItems[this.step].text;
  }

  isNotLast() {
    return this.step < this.introItems.length-1;
  }

  nextStep() {
    this.step++;
  }

  isNotFirst() {
    return this.step > 0;
  }

  previousStep() {
    this.step--;
  }

  finishIntro() {
    this.appService.setFirstStart("1");
    this.profileService.initializeProfile();
    window.location.reload();
  }
}
