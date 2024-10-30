import { Injectable } from '@angular/core';
import { BehaviorSubject, of, throwError } from 'rxjs';

const DEFAULT_USERNAME = 'test-user';
const DEFAULT_PASSWORD = 'gala2028';
const DEFAULT_AUTH_STATE = false;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authenticated$ = new BehaviorSubject<boolean>(
    DEFAULT_AUTH_STATE
  );

  isAuthenticated() {
    return this.authenticated$;
  }

  login(username: string, password: string) {
    if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
      this.authenticated$.next(true);
      return of(true);
    }

    return throwError(() => new Error('Invalid username or password'));
  }

  logout() {
    this.authenticated$.next(false);
  }
}
