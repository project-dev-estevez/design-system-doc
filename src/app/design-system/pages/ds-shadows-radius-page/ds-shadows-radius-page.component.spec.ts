import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsShadowsRadiusPageComponent } from './ds-shadows-radius-page.component';

describe('DsShadowsRadiusPageComponent', () => {
  let component: DsShadowsRadiusPageComponent;
  let fixture: ComponentFixture<DsShadowsRadiusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsShadowsRadiusPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsShadowsRadiusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
