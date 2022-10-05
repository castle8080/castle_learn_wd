import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreObservablesComponent } from './more-observables.component';

describe('MoreObservablesComponent', () => {
  let component: MoreObservablesComponent;
  let fixture: ComponentFixture<MoreObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
