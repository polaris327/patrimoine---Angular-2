import { TestBed, inject } from '@angular/core/testing';

import { PublicService } from './public.service';

describe('PublicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicService]
    });
  });

  it('should ...', inject([PublicService], (service: PublicService) => {
    expect(service).toBeTruthy();
  }));
});
