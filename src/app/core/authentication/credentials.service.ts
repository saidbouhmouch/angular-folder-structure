import { Injectable } from '@angular/core';
import { LocalStorageService } from '../storage/localstorage.service';

export interface ICredentials {
  username: string;
  token: string;
  remember?: boolean;
}

const credentialsKey = 'TOKEN';

/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  private _credentials: ICredentials | null = null;

  constructor(private localStorageService: LocalStorageService) {
    const savedCredentials = this.localStorageService.getItem(credentialsKey);
    if (savedCredentials) {
        this._credentials = savedCredentials;
    }
  }

  /**
   * Checks is the user is authenticated.
   * @return True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  isAdmin(): boolean {
    return true;
  }

  /**
   * Gets the user credentials.
   * @return The user credentials or null if the user is not authenticated.
   */
  get credentials(): ICredentials | null {
    return this._credentials;
  }

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param credentials The user credentials.
   * @param remember True to remember credentials across sessions.
   */
  setCredentials(credentials?: ICredentials) {
    this._credentials = credentials || null;

    if (credentials) {
      this.localStorageService.setItem(credentialsKey, credentials);
    } else {
      this.localStorageService.removeItem(credentialsKey);
    }
  }

  getCredentials(): ICredentials | null {
    if (this._credentials) {
      this._credentials = this.localStorageService.getItem(credentialsKey);
      return this._credentials;
    }
    return null;
  }
}
