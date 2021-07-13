import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../storage/localstorage.service';
import { ApiHttp } from '../../http/api.http';
import * as _ from 'lodash';
import * as jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private localStorage: LocalStorageService,
    private http: ApiHttp
  ) {}
}
