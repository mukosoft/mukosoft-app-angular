import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityNewsCardComponent } from './community-news-card.component';

describe('CommunityNewsCardComponent', () => {
  let component: CommunityNewsCardComponent;
  let fixture: ComponentFixture<CommunityNewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityNewsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
