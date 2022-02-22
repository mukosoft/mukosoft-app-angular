import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xdescribe("initialization of the app", () => {
    it("should show a intro", () => {
      localStorage.clear();
      localStorage.setItem("FIRST_START", "true");
      component.ngOnInit();
      fixture.detectChanges();
      // expect(component.introVisible).toBeTrue();
    });

    it("should not show a intro", () => {
      localStorage.clear();
      localStorage.setItem("FIRST_START", "false");
      component.ngOnInit();
      fixture.detectChanges();
      // expect(component.introVisible).toBeFalse();
    });
  });
});
