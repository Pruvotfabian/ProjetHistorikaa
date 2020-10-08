import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gm2rComponent } from './gm2r.component';

describe('Gm2rComponent', () => {
  let component: Gm2rComponent;
  let fixture: ComponentFixture<Gm2rComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gm2rComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gm2rComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
