import { TestBed, inject } from '@angular/core/testing';

import { InitLoadCustomService } from './init-load-custom.service';

describe('InitLoadCustomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitLoadCustomService]
    });
  });

  it('should ...', inject([InitLoadCustomService], (service: InitLoadCustomService) => {
    expect(service).toBeTruthy();
  }));
});
