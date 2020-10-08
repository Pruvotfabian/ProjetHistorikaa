import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gm2cgComponent } from './gm2cg.component';

describe('Gm2cgComponent', () => {
  let component: Gm2cgComponent;
  let fixture: ComponentFixture<Gm2cgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gm2cgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gm2cgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
