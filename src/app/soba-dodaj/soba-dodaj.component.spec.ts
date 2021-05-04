import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobaDodajComponent } from './soba-dodaj.component';

describe('SobaDodajComponent', () => {
  let component: SobaDodajComponent;
  let fixture: ComponentFixture<SobaDodajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobaDodajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobaDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
