import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TopBarComponent } from "./top-bar.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("AppBarComponent", () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopBarComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("getting profile image", () => {
    it("should get the default profile image", () => {
      component.profileImage = undefined;
      expect(component.getProfileImage()).toBe(
        "./../assets/images/profile-default.png"
      );
    });

    it("should get profile image from localStorage", () => {
      spyOn(
        (component as any).profileService,
        "getProfileImage"
      ).and.returnValue("foo");
      component.ngOnInit();
      expect(component.getProfileImage()).toBe("foo");
    });
  });
});
