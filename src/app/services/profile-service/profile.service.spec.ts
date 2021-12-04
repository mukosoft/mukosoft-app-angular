import { TestBed } from "@angular/core/testing";

import { ProfileService } from "./profile.service";
import {HumanName, Patient} from "fhir/r4";

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileService);
  });

  describe("serialization / deserialization", () => {
    it("should serialize a patient", () => {
      const patient: Patient = {
        resourceType: "Patient"
      }

      expect(service.serializeProfile(patient)).toBe(`{"resourceType":"Patient"}`);
    })
  })
});
