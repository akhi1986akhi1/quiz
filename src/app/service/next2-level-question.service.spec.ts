import { TestBed } from '@angular/core/testing';

import { Next2LevelQuestionService } from './next2-level-question.service';

describe('Next2LevelQuestionService', () => {
  let service: Next2LevelQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Next2LevelQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
