import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineLeftComponent } from './time-line-left.component';

describe('TimeLineLeftComponent', () => {
  let component: TimeLineLeftComponent;
  let fixture: ComponentFixture<TimeLineLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLineLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
