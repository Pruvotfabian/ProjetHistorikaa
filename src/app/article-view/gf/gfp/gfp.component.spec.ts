import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GfpComponent } from './gfp.component';

describe('GfpComponent', () => {
  let component: GfpComponent;
  let fixture: ComponentFixture<GfpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GfpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
