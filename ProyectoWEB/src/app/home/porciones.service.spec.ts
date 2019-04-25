import { TestBed } from '@angular/core/testing';

import { PorcionesService } from './porciones.service';

describe('PorcionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PorcionesService = TestBed.get(PorcionesService);
    expect(service).toBeTruthy();
  });
});
