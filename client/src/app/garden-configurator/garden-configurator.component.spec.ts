import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenConfiguratorComponent } from './garden-configurator.component';

describe('GardenConfiguratorComponent', () => {
  let component: GardenConfiguratorComponent;
  let fixture: ComponentFixture<GardenConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenConfiguratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
