import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorOrderMethodPayComponent } from './selector-order-method-pay.component';

describe('SelectorOrderMethodPayComponent', () => {
  let component: SelectorOrderMethodPayComponent;
  let fixture: ComponentFixture<SelectorOrderMethodPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorOrderMethodPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorOrderMethodPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
