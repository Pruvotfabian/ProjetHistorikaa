import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfrikaComponent } from './afrika.component';

describe('AfrikaComponent', () => {
  let component: AfrikaComponent;
  let fixture: ComponentFixture<AfrikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfrikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfrikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
