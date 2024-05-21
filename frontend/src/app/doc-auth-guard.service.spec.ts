import { TestBed } from '@angular/core/testing';

import { DocAuthGuardService } from './doc-auth-guard.service';

describe('DocAuthGuardService', () => {
  let service: DocAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
