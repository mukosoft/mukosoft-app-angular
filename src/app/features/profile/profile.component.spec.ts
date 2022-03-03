import { ComponentFixture, TestBed, tick } from "@angular/core/testing";

import { ProfileComponent } from "./profile.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("ProfileComponent", () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("setting profile data", () => {
    it("should set profile name", () => {
      localStorage.clear();
      component.setName("foo");
      expect(component.name).toBe("foo");
      expect((component as any).profileService.getName()).toBe("foo");
    });

    it("should set about me", () => {
      localStorage.clear();
      component.setAboutMe("about foo");
      expect(component.likes).toBe("about foo");
      expect((component as any).profileService.getAboutMe()).toBe("about foo");
    });
  });
});
