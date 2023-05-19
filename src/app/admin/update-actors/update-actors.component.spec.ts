import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActorsComponent } from './update-actors.component';

describe('UpdateActorsComponent', () => {
  let component: UpdateActorsComponent;
  let fixture: ComponentFixture<UpdateActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateActorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
