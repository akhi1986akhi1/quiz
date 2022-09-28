import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagirisamComponent } from './plagirisam.component';

describe('PlagirisamComponent', () => {
  let component: PlagirisamComponent;
  let fixture: ComponentFixture<PlagirisamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlagirisamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlagirisamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
