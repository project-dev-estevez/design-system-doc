import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsInstallationPageComponent } from './ds-installation-page.component';

describe('DsInstallationPageComponent', () => {
  let component: DsInstallationPageComponent;
  let fixture: ComponentFixture<DsInstallationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsInstallationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsInstallationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
