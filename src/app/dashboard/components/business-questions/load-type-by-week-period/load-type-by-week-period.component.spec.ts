import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadTypeByWeekPeriodComponent } from './load-type-by-week-period.component';

describe('LoadTypeByWeekPeriodComponent', () => {
  let component: LoadTypeByWeekPeriodComponent;
  let fixture: ComponentFixture<LoadTypeByWeekPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadTypeByWeekPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadTypeByWeekPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
