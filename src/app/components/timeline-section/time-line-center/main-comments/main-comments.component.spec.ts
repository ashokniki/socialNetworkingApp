import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCommentsComponent } from './main-comments.component';

describe('MainCommentsComponent', () => {
  let component: MainCommentsComponent;
  let fixture: ComponentFixture<MainCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
