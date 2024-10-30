import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsRadiosComponent } from './ds-radios.component';

describe('DsRadiosComponent', () => {
  let component: DsRadiosComponent;
  let fixture: ComponentFixture<DsRadiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsRadiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
