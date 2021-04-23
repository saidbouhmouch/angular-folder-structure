import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Logger } from '../logger/logger.service';
import { CredentialsService } from '../authentication/credentials.service';
import { RouterService } from "../services/router.service";

const log = new Logger('AuthenticationGuard');

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private credentialsService: CredentialsService ,private router : RouterService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.credentialsService.isAuthenticated()) {
      return true;
    }
    log.debug('Not authenticated, redirecting and adding redirect url...');
    this.router.goToUrl(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
    return false;
  }
}
