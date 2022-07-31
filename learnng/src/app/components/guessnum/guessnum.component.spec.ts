import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessnumComponent } from './guessnum.component';

describe('RxintroComponent', () => {
  let component: GuessnumComponent;
  let fixture: ComponentFixture<GuessnumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessnumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
