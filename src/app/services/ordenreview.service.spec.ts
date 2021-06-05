import { TestBed } from '@angular/core/testing';

import { OrdenreviewService } from './ordenreview.service';

describe('OrdenreviewService', () => {
  let service: OrdenreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
