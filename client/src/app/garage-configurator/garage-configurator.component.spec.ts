import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageConfiguratorComponent } from './garage-configurator.component';

describe('GarageConfiguratorComponent', () => {
  let component: GarageConfiguratorComponent;
  let fixture: ComponentFixture<GarageConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarageConfiguratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
