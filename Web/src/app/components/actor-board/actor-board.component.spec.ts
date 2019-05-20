import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorBoardComponent } from './actor-board.component';

describe('ActorBoardComponent', () => {
  let component: ActorBoardComponent;
  let fixture: ComponentFixture<ActorBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
