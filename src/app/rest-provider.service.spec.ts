import { TestBed, inject } from '@angular/core/testing';

import { RestProviderService } from './rest-provider.service';

describe('RestProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestProviderService]
    });
  });

  it('should be created', inject([RestProviderService], (service: RestProviderService) => {
    expect(service).toBeTruthy();
  }));
});
