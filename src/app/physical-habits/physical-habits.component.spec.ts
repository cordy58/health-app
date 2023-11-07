import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalHabitsComponent } from './physical-habits.component';

describe('PhysicalHabitsComponent', () => {
  let component: PhysicalHabitsComponent;
  let fixture: ComponentFixture<PhysicalHabitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhysicalHabitsComponent]
    });
    fixture = TestBed.createComponent(PhysicalHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
