import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTypePollComponent } from './post-type-poll.component';

describe('PostTypePollComponent', () => {
  let component: PostTypePollComponent;
  let fixture: ComponentFixture<PostTypePollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTypePollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTypePollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
