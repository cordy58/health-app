import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaningfulPersonalTimeComponent } from './meaningful-personal-time.component';

describe('MeaningfulPersonalTimeComponent', () => {
  let component: MeaningfulPersonalTimeComponent;
  let fixture: ComponentFixture<MeaningfulPersonalTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeaningfulPersonalTimeComponent]
    });
    fixture = TestBed.createComponent(MeaningfulPersonalTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
