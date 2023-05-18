import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesByActorComponent } from './movies-by-actor.component';

describe('MoviesByActorComponent', () => {
  let component: MoviesByActorComponent;
  let fixture: ComponentFixture<MoviesByActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesByActorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesByActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
