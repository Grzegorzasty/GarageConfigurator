import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasteredStepperComponent } from './plastered-stepper.component';

describe('StepperComponent', () => {
  let component: PlasteredStepperComponent;
  let fixture: ComponentFixture<PlasteredStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasteredStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasteredStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
