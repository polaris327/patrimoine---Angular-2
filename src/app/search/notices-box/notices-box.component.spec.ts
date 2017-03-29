import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticesBoxComponent } from './notices-box.component';

describe('NoticesBoxComponent', () => {
  let component: NoticesBoxComponent;
  let fixture: ComponentFixture<NoticesBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticesBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
