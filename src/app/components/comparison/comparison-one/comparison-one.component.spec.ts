import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonOneComponent } from './comparison-one.component';

describe('ComparisonOneComponent', () => {
  let component: ComparisonOneComponent;
  let fixture: ComponentFixture<ComparisonOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparisonOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
