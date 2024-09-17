import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSystemHomePageComponent } from './design-system-home-page.component';

describe('DesignSystemHomePageComponent', () => {
  let component: DesignSystemHomePageComponent;
  let fixture: ComponentFixture<DesignSystemHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesignSystemHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignSystemHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
