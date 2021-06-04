import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorOrderDateComponent } from './selector-order-date.component';

describe('SelectorOrderDateComponent', () => {
  let component: SelectorOrderDateComponent;
  let fixture: ComponentFixture<SelectorOrderDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorOrderDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorOrderDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
