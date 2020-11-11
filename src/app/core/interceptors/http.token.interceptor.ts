import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authenticationService.getToken();
    if (token === null) {
      this.router.navigate(['/login']);
    }
    const AuthRequest = req.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + token
      }
    });

    return next.handle(AuthRequest);
  }
}
