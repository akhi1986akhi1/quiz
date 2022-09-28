import { TestBed } from '@angular/core/testing';

import { ResearchEthicsService } from './research-ethics.service';

describe('ResearchEthicsService', () => {
  let service: ResearchEthicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResearchEthicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
