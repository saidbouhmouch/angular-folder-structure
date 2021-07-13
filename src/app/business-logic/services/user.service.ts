import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/core/storage/localstorage.service';
import { ApiHttp } from 'src/app/core/http/api.http';
//import * as jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private localStorage: LocalStorageService,
    private http: ApiHttp
  ) {}
}
