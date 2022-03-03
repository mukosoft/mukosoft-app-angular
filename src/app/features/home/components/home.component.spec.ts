import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { By } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { News } from "../../../models/my-doc/News";
import { AngularKawaiiModule } from "angular-kawaii";

const mockNews: News[] = [
  {
    id: 1,
    content: "foo content",
    created_at: new Date(),
    groupName: "foo group",
    name: "foo name",
    imageUrl: "#",
    icon: "foo icon",
    updated_at: new Date(),
    content_i18n: {
      de: "foo content",
    },
    name_i18n: {
      de: "foo name",
    },
  },
  {
    id: 2,
    content: "foo content",
    created_at: new Date(),
    groupName: "foo group",
    name: "foo name",
    imageUrl: "#",
    icon: "foo icon",
    updated_at: new Date(),
    content_i18n: {
      de: "foo content",
    },
    name_i18n: {
      de: "foo name",
    },
  },
];

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [HttpClient, HttpHandler],
      imports: [AngularKawaiiModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("the user should have rendered some basic elements", () => {
    it("should have a welcome message containing his username", () => {
      component.name = "John doe";
      fixture.detectChanges();

      const welcomeMessageContainer = fixture.debugElement.query(
        By.css(".home-greeting__container")
      );

      const nameElement = fixture.debugElement.query(
        By.css(".home-greeting__name")
      );

      expect(nameElement.nativeElement.innerText).toBe("John doe");
      expect(welcomeMessageContainer).not.toBeNull();
    });
  });

  describe("the user should see news", () => {
    it("should render a empty news container if user doesn't have news", () => {
      component.news = [];
      component.hasNews = false;
      fixture.detectChanges();

      const emptyContainer = fixture.debugElement.query(
        By.css(".status__no-news")
      );

      const resultContainer = fixture.debugElement.query(
        By.css(".result-container")
      );

      expect(emptyContainer).not.toBeNull();
      expect(resultContainer).toBeNull();
    });

    it("should render a list of news if the user have news", () => {
      component.news = mockNews;
      component.hasNews = true;
      fixture.detectChanges();

      const emptyContainer = fixture.debugElement.query(
        By.css(".status__no-news")
      );

      const newsCardContainer = fixture.debugElement.query(
        By.css(".news-card-container")
      );

      expect(newsCardContainer.children.length).toBe(mockNews.length);
      expect(emptyContainer).toBeNull();
    });
  });
});
