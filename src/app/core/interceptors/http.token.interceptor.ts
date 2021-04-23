import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouterService } from "../services/router.service";

import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService, private router: RouterService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authenticationService.getToken();

    if ((req.url).search("/api/authenticate") != -1) {
         return next.handle(req)
    }
    else if ((req.url).search("/api/authenticate") == -1 && token !== undefined) {
      const AuthRequest = req.clone({
        setHeaders: {
          'Lox-Authorization': 'Bearer ' + token,
          //'lang': this.langService.getLang(),
        }
      });
      return next.handle(AuthRequest);

    } else {
      this.router.goToUrl(['/login'])
    }
  }
}
