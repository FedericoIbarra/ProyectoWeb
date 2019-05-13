import { TestBed } from '@angular/core/testing';

import { IngredientesService } from './ingredientes.service';

describe('IngredientesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngredientesService = TestBed.get(IngredientesService);
    expect(service).toBeTruthy();
  });
});
