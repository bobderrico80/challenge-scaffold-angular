import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { firstValueFrom } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isAuthenticated() method', () => {
    it('returns the current authentication status as an observable', async () => {
      const result = await firstValueFrom(service.isAuthenticated());
      expect(result).toEqual(false);
    });
  });

  describe('login() method', () => {
    describe('when successfully authenticated', () => {
      let result: boolean;

      beforeEach(async () => {
        result = await firstValueFrom(service.login('test-user', 'gala2028'));
      });

      it('returns an observable with a true value', () => {
        expect(result).toEqual(true);
      });

      it('registers the user as authenticated', async () => {
        const authenticated = await firstValueFrom(service.isAuthenticated());
        expect(authenticated).toEqual(true);
      });
    });

    describe('when authentication fails', () => {
      it('returns an observable that errors', async () => {
        await expectAsync(
          firstValueFrom(service.login('foo', 'bar'))
        ).toBeRejectedWith(new Error('Invalid username or password'));
      });
    });
  });

  describe('logout() method', () => {
    it('registers the user as unauthenticated', async () => {
      await firstValueFrom(service.login('test-user', 'gala2028'));
      await expectAsync(
        firstValueFrom(service.isAuthenticated())
      ).toBeResolvedTo(true);

      service.logout();

      await expectAsync(
        firstValueFrom(service.isAuthenticated())
      ).toBeResolvedTo(false);
    });
  });
});
