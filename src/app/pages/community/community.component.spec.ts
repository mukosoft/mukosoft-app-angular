import {ComponentFixture, TestBed} from "@angular/core/testing";

import {CommunityComponent} from "./community.component";
import {HttpClientModule} from "@angular/common/http";

describe("CommunityComponent", () => {
    let component: CommunityComponent;
    let fixture: ComponentFixture<CommunityComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CommunityComponent],
            imports: [HttpClientModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CommunityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
