import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesByGenreComponent } from './movies-by-genre.component';

describe('MoviesByGenreComponent', () => {
  let component: MoviesByGenreComponent;
  let fixture: ComponentFixture<MoviesByGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesByGenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
