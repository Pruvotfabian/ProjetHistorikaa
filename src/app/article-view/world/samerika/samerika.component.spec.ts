import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamerikaComponent } from './samerika.component';

describe('SamerikaComponent', () => {
  let component: SamerikaComponent;
  let fixture: ComponentFixture<SamerikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamerikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamerikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
