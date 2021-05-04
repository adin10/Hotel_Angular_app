import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdategradComponent } from './updategrad.component';

describe('UpdategradComponent', () => {
  let component: UpdategradComponent;
  let fixture: ComponentFixture<UpdategradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdategradComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdategradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
