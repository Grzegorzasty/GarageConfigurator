import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumpsterStepperComponent } from './dumpster-stepper.component';

describe('StepperComponent', () => {
  let component: DumpsterStepperComponent;
  let fixture: ComponentFixture<DumpsterStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumpsterStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DumpsterStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
