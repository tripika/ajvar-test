import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsTwoComponent } from './reviews-two.component';

describe('ReviewsTwoComponent', () => {
  let component: ReviewsTwoComponent;
  let fixture: ComponentFixture<ReviewsTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
