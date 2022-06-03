import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenStorageConfiguratorComponent } from './garden-storage-configurator.component';

describe('GardenStorageConfiguratorComponent', () => {
  let component: GardenStorageConfiguratorComponent;
  let fixture: ComponentFixture<GardenStorageConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenStorageConfiguratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenStorageConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
