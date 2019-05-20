import { TestBed } from '@angular/core/testing';

import { HttpRouteBaseService } from './http-route-base.service';

describe('HttpRouteBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpRouteBaseService = TestBed.get(HttpRouteBaseService);
    expect(service).toBeTruthy();
  });
});
