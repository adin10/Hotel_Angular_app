import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrzaveDetaljiComponent } from './drzave-detalji.component';

describe('DrzaveDetaljiComponent', () => {
  let component: DrzaveDetaljiComponent;
  let fixture: ComponentFixture<DrzaveDetaljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrzaveDetaljiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrzaveDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
