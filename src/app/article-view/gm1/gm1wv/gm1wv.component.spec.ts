import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gm1wvComponent } from './gm1wv.component';

describe('Gm1wvComponent', () => {
  let component: Gm1wvComponent;
  let fixture: ComponentFixture<Gm1wvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gm1wvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gm1wvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
