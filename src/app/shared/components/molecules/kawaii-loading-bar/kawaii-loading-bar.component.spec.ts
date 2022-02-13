import { ComponentFixture, TestBed } from "@angular/core/testing";

import { KawaiiLoadingBarComponent } from "./kawaii-loading-bar.component";

describe("KawaiiLoadingBarComponent", () => {
  let component: KawaiiLoadingBarComponent;
  let fixture: ComponentFixture<KawaiiLoadingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KawaiiLoadingBarComponent ]
    })
    .compileComponents();
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
