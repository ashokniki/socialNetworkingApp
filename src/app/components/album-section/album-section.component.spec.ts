import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumSectionComponent } from './album-section.component';

describe('AlbumSectionComponent', () => {
  let component: AlbumSectionComponent;
  let fixture: ComponentFixture<AlbumSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
