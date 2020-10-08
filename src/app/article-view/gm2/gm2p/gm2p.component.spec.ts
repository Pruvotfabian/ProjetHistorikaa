import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gm2pComponent } from './gm2p.component';

describe('Gm2pComponent', () => {
  let component: Gm2pComponent;
  let fixture: ComponentFixture<Gm2pComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gm2pComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gm2pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
