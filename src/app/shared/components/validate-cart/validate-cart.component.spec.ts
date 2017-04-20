import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCartComponent } from './validate-cart.component';

describe('ValidateCartComponent', () => {
  let component: ValidateCartComponent;
  let fixture: ComponentFixture<ValidateCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
