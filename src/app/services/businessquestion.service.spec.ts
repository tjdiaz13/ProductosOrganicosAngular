import { TestBed } from '@angular/core/testing';

import { BusinessquestionService } from './businessquestion.service';

describe('BusinessquestionService', () => {
  let service: BusinessquestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessquestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
