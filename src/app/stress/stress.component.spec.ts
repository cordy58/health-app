import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressComponent } from './stress.component';

describe('StressComponent', () => {
  let component: StressComponent;
  let fixture: ComponentFixture<StressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StressComponent]
    });
    fixture = TestBed.createComponent(StressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
