import { TestBed } from '@angular/core/testing';

import { WinConfigService } from './win-config.service';

describe('WinConfigService', () => {
  let service: WinConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
