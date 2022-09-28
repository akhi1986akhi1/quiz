import { TestBed } from '@angular/core/testing';

import { NextLevelQuestionService } from './next-level-question.service';

describe('NextLevelQuestionService', () => {
  let service: NextLevelQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NextLevelQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
