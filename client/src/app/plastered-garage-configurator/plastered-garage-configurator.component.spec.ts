import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasteredGarageConfiguratorComponent } from './plastered-garage-configurator.component';

describe('GarageConfiguratorComponent', () => {
  let component: PlasteredGarageConfiguratorComponent;
  let fixture: ComponentFixture<PlasteredGarageConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasteredGarageConfiguratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasteredGarageConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
