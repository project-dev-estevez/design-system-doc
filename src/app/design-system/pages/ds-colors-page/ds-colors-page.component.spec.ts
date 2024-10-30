import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsColorsPageComponent } from './ds-colors-page.component';

describe('DsColorsPageComponent', () => {
  let component: DsColorsPageComponent;
  let fixture: ComponentFixture<DsColorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsColorsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsColorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
