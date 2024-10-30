import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsButtonsComponent } from './ds-buttons.component';

describe('DsButtonsComponent', () => {
  let component: DsButtonsComponent;
  let fixture: ComponentFixture<DsButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
