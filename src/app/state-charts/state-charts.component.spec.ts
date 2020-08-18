import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateChartsComponent } from './state-charts.component';

describe('StateChartsComponent', () => {
  let component: StateChartsComponent;
  let fixture: ComponentFixture<StateChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
