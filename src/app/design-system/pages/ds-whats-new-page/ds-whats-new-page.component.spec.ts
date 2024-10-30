import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsWhatsNewPageComponent } from './ds-whats-new-page.component';

describe('DsWhatsNewPageComponent', () => {
  let component: DsWhatsNewPageComponent;
  let fixture: ComponentFixture<DsWhatsNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsWhatsNewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsWhatsNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
