import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTypeImageComponent } from './post-type-image.component';

describe('PostTypeImageComponent', () => {
  let component: PostTypeImageComponent;
  let fixture: ComponentFixture<PostTypeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTypeImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTypeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
