import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Next2LevelComponent } from './next2-level.component';

describe('Next2LevelComponent', () => {
  let component: Next2LevelComponent;
  let fixture: ComponentFixture<Next2LevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Next2LevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Next2LevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
