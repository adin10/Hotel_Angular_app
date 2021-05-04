import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobaStatusComponent } from './soba-status.component';

describe('SobaStatusComponent', () => {
  let component: SobaStatusComponent;
  let fixture: ComponentFixture<SobaStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobaStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobaStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
