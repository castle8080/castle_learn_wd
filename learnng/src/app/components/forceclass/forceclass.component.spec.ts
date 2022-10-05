import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceclassComponent } from './forceclass.component';

describe('ForceclassComponent', () => {
  let component: ForceclassComponent;
  let fixture: ComponentFixture<ForceclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForceclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
