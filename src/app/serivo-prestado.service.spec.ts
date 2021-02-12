import { TestBed } from '@angular/core/testing';

import { SerivoPrestadoService } from './serivo-prestado.service';

describe('SerivoPrestadoService', () => {
  let service: SerivoPrestadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerivoPrestadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
