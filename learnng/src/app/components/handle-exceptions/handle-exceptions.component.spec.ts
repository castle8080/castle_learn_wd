import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleExceptionsComponent } from './handle-exceptions.component';

describe('HandleExceptionsComponent', () => {
  let component: HandleExceptionsComponent;
  let fixture: ComponentFixture<HandleExceptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleExceptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleExceptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
