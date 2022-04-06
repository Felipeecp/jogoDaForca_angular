import { TestBed } from '@angular/core/testing';

import { JogoMainService } from './jogo-main.service';

describe('JogoMainService', () => {
  let service: JogoMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JogoMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
