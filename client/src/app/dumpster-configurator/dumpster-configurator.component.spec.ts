import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumpsterConfiguratorComponent } from './dumpster-configurator.component';

describe('DumpsterConfiguratorComponent', () => {
  let component: DumpsterConfiguratorComponent;
  let fixture: ComponentFixture<DumpsterConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumpsterConfiguratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DumpsterConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
