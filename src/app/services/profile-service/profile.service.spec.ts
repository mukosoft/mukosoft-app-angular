import { TestBed } from "@angular/core/testing";

import { ProfileService } from "./profile.service";
import {Patient} from "fhir/r4";

describe("ProfileService", () => {
  let service: ProfileService;
  const FHIR_PATIENT = "FHIR_PATIENT";

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileService);
  });

  describe("initialization", () => {
    it("should initialize a profile", () => {
      service.initializeProfile();
      const patient: Patient = JSON.parse(localStorage.getItem(FHIR_PATIENT) || "{}");

      expect(patient.resourceType).toBe("Patient");
      expect(patient.identifier?.length).toBeGreaterThan(0);
      expect(patient.name?.length).toBeGreaterThan(0);
      localStorage.clear();
    })
  })

  describe("serialization / deserialization", () => {
    it("should serialize a patient", () => {
      const patient: Patient = {
        resourceType: "Patient"
      };

      expect(service.serializeProfile(patient)).toBe("{\"resourceType\":\"Patient\"}");
    })

    it("should deserialize a patient", () => {
      service.initializeProfile();

      expect(service.getDeserializedProfile().resourceType).toBe("Patient");
      expect(service.getDeserializedProfile().identifier?.length).toBeGreaterThan(0);
      expect(service.getDeserializedProfile().name?.length).toBeGreaterThan(0);
      localStorage.clear();
    })
  })

  describe("setting and getting specific data from the user", () => {
    it ("should set and get user name", () => {
      service.initializeProfile();
      service.setName("foo");

      expect(service.getName()).toBe("foo");
      localStorage.clear();
    })

    it ("should set and get about me", () => {
      service.initializeProfile();
      service.setAboutMe("foo");

      expect(service.getAboutMe()).toBe("foo");
      localStorage.clear();
    })
  })
});
