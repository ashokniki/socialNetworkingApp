import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingSectionComponent } from './polling-section.component';

describe('PollingSectionComponent', () => {
  let component: PollingSectionComponent;
  let fixture: ComponentFixture<PollingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollingSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
