import {ComponentFixture, TestBed} from "@angular/core/testing";

import {CommunityCardComponent} from "./community-card.component";
import {HttpClient, HttpHandler} from "@angular/common/http";

describe("CommunityCardComponent", () => {
    let component: CommunityCardComponent;
    let fixture: ComponentFixture<CommunityCardComponent>;
    const FAVOURITE_GROUPS = "FAVORITE_GROUPS";

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CommunityCardComponent],
            providers: [HttpClient, HttpHandler]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CommunityCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe("adding / removing from localStorage", () => {
        it("should add a favourite group", () => {
            component.addGroupToFavorite("foo");
            expect(localStorage.getItem(FAVOURITE_GROUPS)).toBe("foo");
        })

        it("should remove a favourite group", () => {
            component.addGroupToFavorite("foo");
            component.addGroupToFavorite("bar");
            component.deleteGroupFromFavorite("bar");
            expect(localStorage.getItem(FAVOURITE_GROUPS)).toBe("foo");
        })
    })

    describe("logical utility", () => {
        it("should return true, if a group is favoured", () => {
            component.addGroupToFavorite("foo");
            expect(component.isGroupFavorite("foo")).toBeTruthy();
        })

        it("should return false, if a group is not favoured", () => {
            component.addGroupToFavorite("foo");
            expect(component.isGroupFavorite("bar")).not.toBeTruthy();
        })
    })
});
