import { Injectable } from "@angular/core";
import {HumanName, Identifier, Patient} from "fhir/r4";
import { v4 as uuidv4 } from "uuid";

export enum PROFILE {
  ABOUT_ME = "ABOUT_ME",
  PROFILE_IMG = "PROFILE_IMG",
  FHIR_PATIENT = "FHIR_PATIENT"
}

/**
 * Service for interaction with the profile.
 *
 * This uses the FHIR Patient model.
 * @see http://www.hl7.org/fhir/patient.html
 *
 * @author Dominique Börner
 */
@Injectable({
  providedIn: "root"
})
export class ProfileService {
  DEFAULT_NAME = "Schleimii";

  /**
   * Create an initial user profile and saves it into localStorage.
   */
  initializeProfile(): void {
    const name: HumanName = {
      use: "nickname",
      text: this.DEFAULT_NAME
    };

    const uuid = `urn:uuid:${uuidv4()}`;
    const identifier: Identifier = {
      value: uuid
    };

    const patient: Patient = {
      resourceType: "Patient",
      identifier: [identifier],
      name: [name]
    };

    localStorage.setItem(PROFILE.FHIR_PATIENT, JSON.stringify(patient));
  }

  /**
   * Returns the users profile as FHIR Patient resource.
   */
  getDeserializedProfile(): Patient {
    return JSON.parse(localStorage.getItem(PROFILE.FHIR_PATIENT) || "{}");
  }

  /**
   * Parses a FHIR Patient resource into a string.
   *
   * @param patient
   */
  serializeProfile(patient: Patient): string {
    return JSON.stringify(patient);
  }

  /**
   * Get users name.
   */
  getName(): string {
    const fhirPatient: Patient = this.getDeserializedProfile();
    let name: HumanName = {};

    if (fhirPatient.name) {
      name = fhirPatient.name[0];
    }

    return name.text || this.DEFAULT_NAME;
  }

  /**
   * Set users name.
   *
   * @param value
   */
  setName(value: string): void {
    const fhirPatient: Patient = this.getDeserializedProfile();

    if (!fhirPatient.name) {
      fhirPatient.name = [
        {
          use: "nickname",
          text: this.DEFAULT_NAME
        }
      ];
    }

    fhirPatient.name[0].text = value;

    const fhirPatientString = this.serializeProfile(fhirPatient);

    localStorage.setItem(PROFILE.FHIR_PATIENT, fhirPatientString);
  }

  /**
   * Get users about me.
   */
  getAboutMe(): string {
    return localStorage.getItem(PROFILE.ABOUT_ME) || "Ich mag besonders gerne ...";
  }

  /**
   * Set users about me.
   *
   * @param value
   */
  setAboutMe(value: string): void {
    localStorage.setItem(PROFILE.ABOUT_ME, value);
  }

  /**
   * Get users profile image or the default profile image.
   */
  getProfileImage(): string {
    return localStorage.getItem(PROFILE.PROFILE_IMG) || ProfileService.getDefaultProfileImage();
  }

  /**
   * Set users profile image.
   *
   * @param value
   */
  setProfileImage(value: string): void {
    localStorage.setItem(PROFILE.PROFILE_IMG, value);
  }

  /**
   * Returns the default profile image url from assets.
   */
  static getDefaultProfileImage(): string {
    return "./../assets/images/profile-default.png";
  }
}
