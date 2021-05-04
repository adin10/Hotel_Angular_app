import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovostiComponent } from './novosti.component';

describe('NovostiComponent', () => {
  let component: NovostiComponent;
  let fixture: ComponentFixture<NovostiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovostiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
