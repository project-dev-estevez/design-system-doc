import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsFontsPageComponent } from './ds-fonts-page.component';

describe('DsFontsPageComponent', () => {
  let component: DsFontsPageComponent;
  let fixture: ComponentFixture<DsFontsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsFontsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsFontsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
