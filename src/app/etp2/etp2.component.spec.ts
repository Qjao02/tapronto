import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Etp2Component } from './etp2.component';

describe('Etp2Component', () => {
  let component: Etp2Component;
  let fixture: ComponentFixture<Etp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Etp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Etp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
