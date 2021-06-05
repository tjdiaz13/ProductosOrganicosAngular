import { TestBed } from '@angular/core/testing';

import { OrdenuserService } from './ordenuser.service';

describe('OrdenuserService', () => {
  let service: OrdenuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
