import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAwardComponent } from './update-award.component';

describe('UpdateAwardComponent', () => {
  let component: UpdateAwardComponent;
  let fixture: ComponentFixture<UpdateAwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
