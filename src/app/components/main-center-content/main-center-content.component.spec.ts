import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCenterContentComponent } from './main-center-content.component';

describe('MainCenterContentComponent', () => {
  let component: MainCenterContentComponent;
  let fixture: ComponentFixture<MainCenterContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCenterContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCenterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
