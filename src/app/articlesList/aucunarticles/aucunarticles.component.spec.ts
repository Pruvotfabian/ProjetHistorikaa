import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AucunarticlesComponent } from './aucunarticles.component';

describe('AucunarticlesComponent', () => {
  let component: AucunarticlesComponent;
  let fixture: ComponentFixture<AucunarticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AucunarticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AucunarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
