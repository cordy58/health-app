import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratitudeMindfulnessComponent } from './gratitude-mindfulness.component';

describe('GratitudeMindfulnessComponent', () => {
  let component: GratitudeMindfulnessComponent;
  let fixture: ComponentFixture<GratitudeMindfulnessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GratitudeMindfulnessComponent]
    });
    fixture = TestBed.createComponent(GratitudeMindfulnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
