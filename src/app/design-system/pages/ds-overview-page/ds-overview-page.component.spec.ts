import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsOverviewPageComponent } from './ds-overview-page.component';

describe('DsOverviewPageComponent', () => {
  let component: DsOverviewPageComponent;
  let fixture: ComponentFixture<DsOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsOverviewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
