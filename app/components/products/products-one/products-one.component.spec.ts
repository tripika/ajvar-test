import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOneComponent } from './products-one.component';

describe('ProductsOneComponent', () => {
  let component: ProductsOneComponent;
  let fixture: ComponentFixture<ProductsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
