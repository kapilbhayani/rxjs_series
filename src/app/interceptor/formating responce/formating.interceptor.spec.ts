import { TestBed } from '@angular/core/testing';

import { FormatingInterceptor } from './formating.interceptor';

describe('FormatingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FormatingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FormatingInterceptor = TestBed.inject(FormatingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
