import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumCounterInput } from './costum-counter-input';

describe('CostumCounterInput', () => {
  let component: CostumCounterInput;
  let fixture: ComponentFixture<CostumCounterInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostumCounterInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostumCounterInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
