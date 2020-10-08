import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gm2hgComponent } from './gm2hg.component';

describe('Gm2hgComponent', () => {
  let component: Gm2hgComponent;
  let fixture: ComponentFixture<Gm2hgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gm2hgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gm2hgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
