import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadTypeByPeriodComponent } from './load-type-by-period.component';

describe('LoadTypeByPeriodComponent', () => {
  let component: LoadTypeByPeriodComponent;
  let fixture: ComponentFixture<LoadTypeByPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadTypeByPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadTypeByPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
