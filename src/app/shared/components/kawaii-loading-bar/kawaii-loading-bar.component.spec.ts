import { ComponentFixture, TestBed } from "@angular/core/testing";

import { KawaiiLoadingBarComponent } from "./kawaii-loading-bar.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AngularKawaiiModule } from "angular-kawaii";

describe("KawaiiLoadingBarComponent", () => {
  let component: KawaiiLoadingBarComponent;
  let fixture: ComponentFixture<KawaiiLoadingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KawaiiLoadingBarComponent],
      imports: [AngularKawaiiModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KawaiiLoadingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
