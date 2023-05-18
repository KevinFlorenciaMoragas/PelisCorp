import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesByMovieNameComponent } from './movies-by-movie-name.component';

describe('MoviesByMovieNameComponent', () => {
  let component: MoviesByMovieNameComponent;
  let fixture: ComponentFixture<MoviesByMovieNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesByMovieNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesByMovieNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
