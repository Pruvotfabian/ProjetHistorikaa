import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gm2gbComponent } from './gm2gb.component';

describe('Gm2gbComponent', () => {
  let component: Gm2gbComponent;
  let fixture: ComponentFixture<Gm2gbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gm2gbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gm2gbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
