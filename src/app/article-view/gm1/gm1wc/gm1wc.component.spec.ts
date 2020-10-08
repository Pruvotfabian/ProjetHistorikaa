import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gm1wcComponent } from './gm1wc.component';

describe('Gm1wcComponent', () => {
  let component: Gm1wcComponent;
  let fixture: ComponentFixture<Gm1wcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gm1wcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gm1wcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
