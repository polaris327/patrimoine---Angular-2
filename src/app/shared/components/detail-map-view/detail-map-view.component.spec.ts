import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMapViewComponent } from './detail-map-view.component';

describe('DetailMapViewComponent', () => {
  let component: DetailMapViewComponent;
  let fixture: ComponentFixture<DetailMapViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMapViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
