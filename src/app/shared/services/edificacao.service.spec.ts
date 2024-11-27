import { TestBed } from '@angular/core/testing';

import { EdificacaoService } from './edificacao.service';

describe('EdificacaoService', () => {
  let service: EdificacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdificacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
