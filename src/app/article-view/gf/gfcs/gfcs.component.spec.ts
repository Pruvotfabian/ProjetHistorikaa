import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GfcsComponent } from './gfcs.component';

describe('GfcsComponent', () => {
  let component: GfcsComponent;
  let fixture: ComponentFixture<GfcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GfcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GfcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
