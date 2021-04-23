import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { NotifyService } from '../notify/notify.service';
import { RouterService } from "../services/router.service";


import { Logger } from '../logger/logger.service';
const log = new Logger('AuthenticationGuard');


/**
 * Adds a default error handler to all requests.
 */
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private notifyService: NotifyService, private router: RouterService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(error => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler(response: any): Observable<HttpEvent<any>> {
    if (response.url.search('/api') != -1 && response.url.search('/api/authenticate') == -1) {
         this.notifyService.error(' ' + response.error.path, response.error.message);
    }

    if (!environment.production) {
        log.error('Request error', response);
    }

    if (response.error.status == 403) {
      this.router.goToUrl(['/login'], { replaceUrl: true });
    }

    throw response;
  }
}
