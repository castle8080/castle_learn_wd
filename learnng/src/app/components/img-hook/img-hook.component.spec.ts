import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgHookComponent } from './img-hook.component';

describe('ImgHookComponent', () => {
  let component: ImgHookComponent;
  let fixture: ComponentFixture<ImgHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgHookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
