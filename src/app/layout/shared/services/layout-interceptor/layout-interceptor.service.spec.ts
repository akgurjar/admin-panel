import { TestBed } from '@angular/core/testing';

import { LayoutInterceptorService } from './layout-interceptor.service';

describe('LayoutInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayoutInterceptorService = TestBed.get(LayoutInterceptorService);
    expect(service).toBeTruthy();
  });
});
