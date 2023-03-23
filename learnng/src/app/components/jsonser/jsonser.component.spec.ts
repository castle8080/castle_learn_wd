import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonserComponent } from './jsonser.component';

describe('JsonserComponent', () => {
  let component: JsonserComponent;
  let fixture: ComponentFixture<JsonserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
