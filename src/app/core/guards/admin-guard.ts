import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Logger } from '../logger/logger.service';
import { CredentialsService } from '../authentication/credentials.service';
import { RouterService } from "../services/router.service";

const log = new Logger('AuthenticationGuard');

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: RouterService, private credentialsService: CredentialsService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.credentialsService.isAdmin()) {
      return true;
    }
    log.debug('Not authenticated, redirecting and adding redirect url...');
    this.router.goToUrl(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
    return false;
  }
}
