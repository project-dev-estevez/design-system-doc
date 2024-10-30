import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsHomePageComponent } from './ds-home-page.component';

describe('DsHomePageComponent', () => {
  let component: DsHomePageComponent;
  let fixture: ComponentFixture<DsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
