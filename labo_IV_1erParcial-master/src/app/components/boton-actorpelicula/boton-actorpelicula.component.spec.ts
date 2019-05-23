import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonActorpeliculaComponent } from './boton-actorpelicula.component';

describe('BotonActorpeliculaComponent', () => {
  let component: BotonActorpeliculaComponent;
  let fixture: ComponentFixture<BotonActorpeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonActorpeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonActorpeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
