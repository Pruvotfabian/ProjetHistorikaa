import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GfwvComponent } from './gfwv.component';

describe('GfwvComponent', () => {
  let component: GfwvComponent;
  let fixture: ComponentFixture<GfwvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GfwvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GfwvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
