import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gm1hgComponent } from './gm1hg.component';

describe('Gm1hgComponent', () => {
  let component: Gm1hgComponent;
  let fixture: ComponentFixture<Gm1hgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gm1hgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gm1hgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
