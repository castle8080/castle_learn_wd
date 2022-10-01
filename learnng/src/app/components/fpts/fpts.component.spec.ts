import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FptsComponent } from './fpts.component';

describe('FptsComponent', () => {
  let component: FptsComponent;
  let fixture: ComponentFixture<FptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
