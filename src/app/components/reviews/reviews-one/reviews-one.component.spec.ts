import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsOneComponent } from './reviews-one.component';

describe('ReviewsOneComponent', () => {
  let component: ReviewsOneComponent;
  let fixture: ComponentFixture<ReviewsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
