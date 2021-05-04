import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusurediComponent } from './statusuredi.component';

describe('StatusurediComponent', () => {
  let component: StatusurediComponent;
  let fixture: ComponentFixture<StatusurediComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusurediComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusurediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
