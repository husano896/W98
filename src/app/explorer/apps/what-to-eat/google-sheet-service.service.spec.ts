import { TestBed } from '@angular/core/testing';

import { GoogleSheetServiceService } from './google-sheet-service.service';

describe('GoogleSheetServiceService', () => {
  let service: GoogleSheetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleSheetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
