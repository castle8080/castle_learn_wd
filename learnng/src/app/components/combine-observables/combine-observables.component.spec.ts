import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineObservablesComponent } from './combine-observables.component';

describe('CombineObservablesComponent', () => {
  let component: CombineObservablesComponent;
  let fixture: ComponentFixture<CombineObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
