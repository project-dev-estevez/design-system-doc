import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSystemLayoutComponent } from './design-system-layout.component';

describe('DesignSystemLayoutComponent', () => {
  let component: DesignSystemLayoutComponent;
  let fixture: ComponentFixture<DesignSystemLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesignSystemLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignSystemLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
