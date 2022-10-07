import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonetestComponent } from './zonetest.component';

describe('ZonetestComponent', () => {
  let component: ZonetestComponent;
  let fixture: ComponentFixture<ZonetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonetestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
