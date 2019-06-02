import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFriendsPopupComponent } from './add-friends-popup.component';

describe('AddFriendsPopupComponent', () => {
  let component: AddFriendsPopupComponent;
  let fixture: ComponentFixture<AddFriendsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFriendsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFriendsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
