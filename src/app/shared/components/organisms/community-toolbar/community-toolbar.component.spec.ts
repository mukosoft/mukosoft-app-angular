import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CommunityToolbarComponent } from "./community-toolbar.component";

describe("CommunityToolbarComponent", () => {
  let component: CommunityToolbarComponent;
  let fixture: ComponentFixture<CommunityToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should emit textInput", () => {
    const spy = spyOn(component.textInputEmitter, "emit");
    component.onTextInput("foo");
    expect(spy).toHaveBeenCalledOnceWith("foo");
  });
});
