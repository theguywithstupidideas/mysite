import { TestBed } from '@angular/core/testing';

import { GoRouteService } from './go-route.service';

describe('GoRouteService', () => {
  let service: GoRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
