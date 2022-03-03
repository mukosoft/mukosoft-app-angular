import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FileComponent } from "./file.component";

describe("FileComponent", () => {
  let component: FileComponent;
  let fixture: ComponentFixture<FileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should download file", () => {
    component.file = { _url: "/foo", filename: "Foo File" };
    expect(component.file).toEqual({ _url: "/foo", filename: "Foo File" });
  });
});
