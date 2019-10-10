import { TestBed, inject } from '@angular/core/testing';

import { TripCreateService } from './trip-create.service';

describe('TripCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripCreateService]
    });
  });

  it('should be created', inject([TripCreateService], (service: TripCreateService) => {
    expect(service).toBeTruthy();
  }));
});
