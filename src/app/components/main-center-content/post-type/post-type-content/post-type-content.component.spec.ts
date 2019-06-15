import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTypeContentComponent } from './post-type-content.component';

describe('PostTypeContentComponent', () => {
  let component: PostTypeContentComponent;
  let fixture: ComponentFixture<PostTypeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTypeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTypeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
