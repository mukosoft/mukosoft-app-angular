import { Injectable } from '@angular/core';
import {HumanName, Identifier, Patient} from "fhir/r4";
import { v4 as uuidv4 } from "uuid";

export enum PROFILE {
  ABOUT_ME = "ABOUT_ME",
  PROFILE_IMG = "PROFILE_IMG",
  FHIR_PATIENT = "FHIR_PATIENT"
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  DEFAULT_NAME = "Schleimii";

  initializeProfile() {
    const name: HumanName = {
      use: "nickname",
      text: this.DEFAULT_NAME
    };

    const uuid = `urn:uuid:${uuidv4()}`
    const identifier: Identifier = {
      value: uuid
    }

    const patient: Patient = {
      resourceType: "Patient",
      identifier: [identifier],
      name: [name]
    }

    localStorage.setItem(PROFILE.FHIR_PATIENT, JSON.stringify(patient));
  }

  getDeserializedProfile(): Patient {
    return JSON.parse(localStorage.getItem(PROFILE.FHIR_PATIENT) || "{}");
  }

  serializeProfile(patient: Patient): string {
    return JSON.stringify(patient);
  }

  getName(): string {
    const fhirPatient: Patient = this.getDeserializedProfile();
    let name: HumanName = {};
    if (fhirPatient.name) {
      name = fhirPatient.name[0];
    }

    return name.text || this.DEFAULT_NAME;
  }

  setName(value: string) {
    const fhirPatient: Patient = this.getDeserializedProfile();
    if (fhirPatient.name) {
      fhirPatient.name[0].text = value;
    }

    const fhirPatientString = this.serializeProfile(fhirPatient);

    localStorage.setItem(PROFILE.FHIR_PATIENT, fhirPatientString);
  }

  getAboutMe(): string {
    return localStorage.getItem(PROFILE.ABOUT_ME) || "Ich mag besonders gerne ...";
  }

  setAboutMe(value: string) {
    localStorage.setItem(PROFILE.ABOUT_ME, value);
  }

  getProfileImage(): string {
    return localStorage.getItem(PROFILE.PROFILE_IMG) || ProfileService.getDefaultProfileImage();
  }

  setProfileImage(value: string) {
    localStorage.setItem(PROFILE.PROFILE_IMG, value);
  }

  static getDefaultProfileImage() {
    return "./../assets/images/profile-default.png";
  }
}
