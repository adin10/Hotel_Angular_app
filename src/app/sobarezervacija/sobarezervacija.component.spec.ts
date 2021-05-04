import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobarezervacijaComponent } from './sobarezervacija.component';

describe('SobarezervacijaComponent', () => {
  let component: SobarezervacijaComponent;
  let fixture: ComponentFixture<SobarezervacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobarezervacijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobarezervacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
