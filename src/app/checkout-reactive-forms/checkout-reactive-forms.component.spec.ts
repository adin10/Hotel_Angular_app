import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutReactiveFormsComponent } from './checkout-reactive-forms.component';

describe('CheckoutReactiveFormsComponent', () => {
  let component: CheckoutReactiveFormsComponent;
  let fixture: ComponentFixture<CheckoutReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutReactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
