import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsTuttorialComponent } from './reactive-forms-tuttorial.component';

describe('ReactiveFormsTuttorialComponent', () => {
  let component: ReactiveFormsTuttorialComponent;
  let fixture: ComponentFixture<ReactiveFormsTuttorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsTuttorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsTuttorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
