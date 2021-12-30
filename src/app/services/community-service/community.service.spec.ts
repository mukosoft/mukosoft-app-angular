import {TestBed} from "@angular/core/testing";

import {CommunityService} from "./community.service";
import {HttpClient, HttpHandler} from "@angular/common/http";

describe("CommunityService", () => {
    let service: CommunityService;
    const FAVORITE_GROUPS = "FAVORITE_GROUPS";

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HttpClient, HttpHandler]
        });
        service = TestBed.inject(CommunityService);
    });

    describe("Adding and deleting a favourite group", () => {
        it("should add a favorite group to localStorage", () => {
            service.addFavoriteGroup("foo");
            expect(localStorage.getItem(FAVORITE_GROUPS)).toBe("foo");
            localStorage.clear();
        })

        it("should not add a favorite group two times", () => {
            service.addFavoriteGroup("foo");
            service.addFavoriteGroup("foo");
            expect(localStorage.getItem(FAVORITE_GROUPS)).toBe("foo");
            localStorage.clear();
        })

        it("should delete a favorite group from localStorage", () => {
            service.addFavoriteGroup("foo");
            service.deleteGroupFromFavorite("foo");
            expect(localStorage.getItem(FAVORITE_GROUPS)).not.toBe("foo");
            localStorage.clear();
        })

        it("should not crash, when a not favoured group is deleted", () => {
            service.addFavoriteGroup("foo");
            service.deleteGroupFromFavorite("bar");
            expect(localStorage.getItem(FAVORITE_GROUPS)).toBe("foo");
            localStorage.clear();
        })
    })

    describe("Logical utility", () => {
        it("should return true / false, if a group is favoured", () => {
            service.addFavoriteGroup("foo");
            expect(service.isGroupFavorite("foo")).toBeTruthy();
            localStorage.clear();
        })

        it("should return a string array of groups", () => {
            service.addFavoriteGroup("foo");
            service.addFavoriteGroup("bar");

            expect(service.getGroups().length).toBe(2);
            expect(service.getGroups()[0]).toBe("foo");
            expect(service.getGroups()[1]).toBe("bar");
            localStorage.clear();
        })
    })
});
