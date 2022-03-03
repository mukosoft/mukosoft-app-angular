import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CommunityDetailComponent } from "./community-detail.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";

describe("CommunityDetailComponent", () => {
  let component: CommunityDetailComponent;
  let fixture: ComponentFixture<CommunityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommunityDetailComponent],
      imports: [RouterTestingModule, HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
