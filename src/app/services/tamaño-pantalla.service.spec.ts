import { TestBed } from '@angular/core/testing';

import { TamañoPantallaService } from './tamaño-pantalla.service';

describe('TamañoPantallaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TamañoPantallaService = TestBed.get(TamañoPantallaService);
    expect(service).toBeTruthy();
  });
});
