import { ComponentFixture, TestBed } from "@angular/core/testing";

import { IntroComponent } from "./intro.component";
import { Intro } from "../../models/intro";

const introItems: Intro[] = [
  {
    heading: "foo",
    text: "foo text",
    image: undefined,
  },
  {
    heading: "bar",
    text: "bar text",
    image: undefined,
  },
];

describe("IntroComponent", () => {
  let component: IntroComponent;
  let fixture: ComponentFixture<IntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("navigation forwards and backwards", () => {
    it("should navigate to next", () => {
      component.step = 2;
      component.nextStep();
      expect(component.step).toBe(3);
    });

    it("should not navigate to next if at end", () => {
      component.introItems = introItems;

      component.step = 1;
      component.nextStep();
      expect(component.step).toBe(1);
    });

    it("should navigate to prev", () => {
      component.step = 2;
      component.previousStep();
      expect(component.step).toBe(1);
    });

    it("should navigate to prev if at start", () => {
      component.step = 0;
      component.previousStep();
      expect(component.step).toBe(0);
    });
  });

  xit("should initialize the profile", () => {
    localStorage.clear();

    component.finishIntro();

    const firstStart = localStorage.getItem("FIRST_START");
    expect(firstStart).toBe("false");
  });
});
