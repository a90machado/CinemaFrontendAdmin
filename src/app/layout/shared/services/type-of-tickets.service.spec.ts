import { TestBed } from '@angular/core/testing';

import { TypeOfTicketsService } from './type-of-tickets.service';

describe('TypeOfTicketsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeOfTicketsService = TestBed.get(TypeOfTicketsService);
    expect(service).toBeTruthy();
  });
});
