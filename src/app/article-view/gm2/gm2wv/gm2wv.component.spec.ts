import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gm2wvComponent } from './gm2wv.component';

describe('Gm2wvComponent', () => {
  let component: Gm2wvComponent;
  let fixture: ComponentFixture<Gm2wvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gm2wvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gm2wvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
