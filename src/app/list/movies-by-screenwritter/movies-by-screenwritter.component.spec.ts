import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesByScreenwritterComponent } from './movies-by-screenwritter.component';

describe('MoviesByScreenwritterComponent', () => {
  let component: MoviesByScreenwritterComponent;
  let fixture: ComponentFixture<MoviesByScreenwritterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesByScreenwritterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesByScreenwritterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
