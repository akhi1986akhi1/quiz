import { TestBed } from '@angular/core/testing';

import { SecondaryDataService } from './secondary-data.service';

describe('SecondaryDataService', () => {
  let service: SecondaryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondaryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
