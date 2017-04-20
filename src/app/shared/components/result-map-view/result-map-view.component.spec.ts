import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultMapViewComponent } from './result-map-view.component';

describe('ResultMapViewComponent', () => {
  let component: ResultMapViewComponent;
  let fixture: ComponentFixture<ResultMapViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultMapViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultMapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
