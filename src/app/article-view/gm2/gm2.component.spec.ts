import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GM2Component } from './gm2.component';

describe('GM2Component', () => {
  let component: GM2Component;
  let fixture: ComponentFixture<GM2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GM2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GM2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
