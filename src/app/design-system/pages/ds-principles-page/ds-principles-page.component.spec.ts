import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPrinciplesPageComponent } from './ds-principles-page.component';

describe('DsPrinciplesPageComponent', () => {
  let component: DsPrinciplesPageComponent;
  let fixture: ComponentFixture<DsPrinciplesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsPrinciplesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsPrinciplesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
