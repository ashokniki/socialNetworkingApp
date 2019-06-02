import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineRightComponent } from './time-line-right.component';

describe('TimeLineRightComponent', () => {
  let component: TimeLineRightComponent;
  let fixture: ComponentFixture<TimeLineRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLineRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
