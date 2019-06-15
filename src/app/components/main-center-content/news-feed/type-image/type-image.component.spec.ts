import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeImageComponent } from './type-image.component';

describe('TypeImageComponent', () => {
  let component: TypeImageComponent;
  let fixture: ComponentFixture<TypeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
