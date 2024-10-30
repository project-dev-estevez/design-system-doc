import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsGridLayoutPageComponent } from './ds-grid-layout-page.component';

describe('DsGridLayoutPageComponent', () => {
  let component: DsGridLayoutPageComponent;
  let fixture: ComponentFixture<DsGridLayoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsGridLayoutPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsGridLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
