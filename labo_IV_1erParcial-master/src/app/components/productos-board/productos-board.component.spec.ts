import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosBoardComponent } from './productos-board.component';

describe('ProductosBoardComponent', () => {
  let component: ProductosBoardComponent;
  let fixture: ComponentFixture<ProductosBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
