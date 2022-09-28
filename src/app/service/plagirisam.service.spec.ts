import { TestBed } from '@angular/core/testing';

import { PlagirisamService } from './plagirisam.service';

describe('PlagirisamService', () => {
  let service: PlagirisamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlagirisamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
