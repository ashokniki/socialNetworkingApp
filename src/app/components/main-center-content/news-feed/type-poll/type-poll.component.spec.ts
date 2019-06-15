import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePollComponent } from './type-poll.component';

describe('TypePollComponent', () => {
  let component: TypePollComponent;
  let fixture: ComponentFixture<TypePollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypePollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
