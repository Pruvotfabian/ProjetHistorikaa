import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GM1Component } from './gm1.component';

describe('GM1Component', () => {
  let component: GM1Component;
  let fixture: ComponentFixture<GM1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GM1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GM1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
