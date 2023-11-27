import { TestBed } from '@angular/core/testing';

import { SuperAdminInterceptor } from './super-admin.interceptor';

describe('SuperAdminInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SuperAdminInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SuperAdminInterceptor = TestBed.inject(SuperAdminInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
