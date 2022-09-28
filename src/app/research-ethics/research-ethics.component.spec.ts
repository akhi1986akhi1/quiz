import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchEthicsComponent } from './research-ethics.component';

describe('ResearchEthicsComponent', () => {
  let component: ResearchEthicsComponent;
  let fixture: ComponentFixture<ResearchEthicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchEthicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchEthicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
