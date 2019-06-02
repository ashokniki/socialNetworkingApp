import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineCenterComponent } from './time-line-center.component';

describe('TimeLineCenterComponent', () => {
  let component: TimeLineCenterComponent;
  let fixture: ComponentFixture<TimeLineCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLineCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
