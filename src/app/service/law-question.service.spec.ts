import { TestBed } from '@angular/core/testing';

import { LawQuestionService } from './law-question.service';

describe('LawQuestionService', () => {
  let service: LawQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LawQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
