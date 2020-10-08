import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GfespComponent } from './gfesp.component';

describe('GfespComponent', () => {
  let component: GfespComponent;
  let fixture: ComponentFixture<GfespComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GfespComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GfespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
