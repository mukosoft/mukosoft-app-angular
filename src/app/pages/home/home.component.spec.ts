import {ComponentFixture, TestBed} from "@angular/core/testing";

import {HomeComponent} from "./home.component";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {MyDocResponse} from "../../models/my-doc/MyDocResponse";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [HttpClient, HttpHandler]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
