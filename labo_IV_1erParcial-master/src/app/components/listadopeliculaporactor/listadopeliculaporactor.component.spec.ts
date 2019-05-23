import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadopeliculaporactorComponent } from './listadopeliculaporactor.component';

describe('ListadopeliculaporactorComponent', () => {
  let component: ListadopeliculaporactorComponent;
  let fixture: ComponentFixture<ListadopeliculaporactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadopeliculaporactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadopeliculaporactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
