import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CredentialsService } from './credentials.service';
import { ApiHttp } from '../http/api.http';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private credentialsService: CredentialsService, private apiHttp: ApiHttp) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(username, password): Observable<any> {
    return this.apiHttp.post('authenticate', { username, password });
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    this.credentialsService.setCredentials();
    return of(true);
  }

  getToken(): String | null {
    const credentials = this.credentialsService.getCredentials();
    if (credentials) {
      return credentials.token;
    }
    return null;
  }

  destroyToken() {
    this.credentialsService.setCredentials();
  }
}
