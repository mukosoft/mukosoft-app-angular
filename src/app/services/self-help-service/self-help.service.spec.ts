import { TestBed } from '@angular/core/testing';

import { SelfHelpService } from './self-help.service';

describe('SelfHelpService', () => {
  let service: SelfHelpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfHelpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
