import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesByDirectorComponent } from './movies-by-director.component';

describe('MoviesByDirectorComponent', () => {
  let component: MoviesByDirectorComponent;
  let fixture: ComponentFixture<MoviesByDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesByDirectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesByDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
