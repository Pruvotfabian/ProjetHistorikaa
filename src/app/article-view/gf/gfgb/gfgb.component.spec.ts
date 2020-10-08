import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GfgbComponent } from './gfgb.component';

describe('GfgbComponent', () => {
  let component: GfgbComponent;
  let fixture: ComponentFixture<GfgbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GfgbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GfgbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
