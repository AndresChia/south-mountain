/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResolutionService } from './resolution.service';

describe('Service: Resolution', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolutionService]
    });
  });

  it('should ...', inject([ResolutionService], (service: ResolutionService) => {
    expect(service).toBeTruthy();
  }));
});
