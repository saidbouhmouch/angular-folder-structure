import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiPrefixInterceptor, ErrorHandlerInterceptor, HttpTokenInterceptor } from './interceptors';

import { ApiHttp } from './http';
import { LangService, TranslateService } from './services';
import { AuthenticationService } from './authentication';
import { NotifyService } from './notify';
import { ToastrModule } from 'ngx-toastr';
import { LocalStorageService } from './storage';

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
export class CoreModule {}
