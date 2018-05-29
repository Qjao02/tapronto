import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Etp1Component } from './etp1.component';

describe('Etp1Component', () => {
  let component: Etp1Component;
  let fixture: ComponentFixture<Etp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Etp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Etp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
