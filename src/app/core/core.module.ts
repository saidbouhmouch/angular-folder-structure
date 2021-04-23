import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiPrefixInterceptor } from './interceptors/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';

import { ApiHttp } from './http/api.http';
import { LangService } from './services/lan.service';
import { TranslateService } from './services/translate.service';
import { AuthenticationService } from './authentication/authentication.service';
import { NotifyService } from './notify/notify.service';
import { ToastrModule } from 'ngx-toastr';
import { LocalStorageService } from './storage/localstorage.service';

@NgModule({
  imports: [CommonModule, ToastrModule.forRoot()],
  providers: [
    NotifyService,
    ApiHttp,
    AuthenticationService,
    LocalStorageService,
    LangService,
    TranslateService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
  ],
  declarations: []
})
export class CoreModule { }
