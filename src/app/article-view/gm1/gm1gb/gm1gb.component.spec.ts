import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gm1gbComponent } from './gm1gb.component';

describe('Gm1gbComponent', () => {
  let component: Gm1gbComponent;
  let fixture: ComponentFixture<Gm1gbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gm1gbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gm1gbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
