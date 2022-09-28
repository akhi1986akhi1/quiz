import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawQuestionComponent } from './law-question.component';

describe('LawQuestionComponent', () => {
  let component: LawQuestionComponent;
  let fixture: ComponentFixture<LawQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
