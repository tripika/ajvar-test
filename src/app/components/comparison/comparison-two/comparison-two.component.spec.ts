import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonTwoComponent } from './comparison-two.component';

describe('ComparisonTwoComponent', () => {
  let component: ComparisonTwoComponent;
  let fixture: ComponentFixture<ComparisonTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparisonTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
