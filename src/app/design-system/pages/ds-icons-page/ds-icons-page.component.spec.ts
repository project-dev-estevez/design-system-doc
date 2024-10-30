import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsIconsPageComponent } from './ds-icons-page.component';

describe('DsIconsPageComponent', () => {
  let component: DsIconsPageComponent;
  let fixture: ComponentFixture<DsIconsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsIconsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsIconsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
