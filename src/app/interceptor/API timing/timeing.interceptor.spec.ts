import { TestBed } from '@angular/core/testing';

import { TimeingInterceptor } from './timeing.interceptor';

describe('TimeingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TimeingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TimeingInterceptor = TestBed.inject(TimeingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
