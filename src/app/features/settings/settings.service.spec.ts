import { TestBed } from "@angular/core/testing";

import { SettingsService } from "./settings.service";

describe("SettingsService", () => {
  let service: SettingsService;
  const LANGUAGE = "LANGUAGE";

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsService);
  });

  it("should set the language", () => {
    service.setLanguage("en");
    expect(localStorage.getItem(LANGUAGE)).toBe("en");
    localStorage.clear();
  })
});
