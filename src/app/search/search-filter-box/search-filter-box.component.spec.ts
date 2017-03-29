import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterBoxComponent } from './search-filter-box.component';

describe('SearchFilterBoxComponent', () => {
  let component: SearchFilterBoxComponent;
  let fixture: ComponentFixture<SearchFilterBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
