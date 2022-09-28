import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryDataComponent } from './secondary-data.component';

describe('SecondaryDataComponent', () => {
  let component: SecondaryDataComponent;
  let fixture: ComponentFixture<SecondaryDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
