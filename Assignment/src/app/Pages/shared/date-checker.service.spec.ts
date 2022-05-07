import { TestBed } from '@angular/core/testing';

import { DateCheckerService } from './date-checker.service';

describe('DateCheckerService', () => {
  let service: DateCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
