import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Postlink } from './postlink';

describe('Postlink', () => {
  let component: Postlink;
  let fixture: ComponentFixture<Postlink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Postlink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Postlink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
