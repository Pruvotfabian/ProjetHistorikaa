import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GFComponent } from './gf.component';

describe('GFComponent', () => {
  let component: GFComponent;
  let fixture: ComponentFixture<GFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
