import { Injectable } from '@angular/core';
import { environment } from '../environments'
import { StateService } from '../'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  resourceName : string;

  constructor(private stateService : StateService) {
    this.resourceName = environment.appName;
  }

 

  setItem(key: string, data: any) {
    key = this.resourceName + key.toLocaleUpperCase() + environment.version;
    localStorage.setItem(key, JSON.stringify(data));
    this.stateService.changeSubject(key,data);
  }

   removeItem(key) {
    key = this.resourceName + key.toLocaleUpperCase() + environment.version;
    localStorage.removeItem(key);
    this.stateService.changeSubject(key,null);
  }

  getItem(key) {
    key = this.resourceName + key.toLocaleUpperCase() + environment.version;
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    return undefined;
  }

  

  clear() {
    localStorage.remove();
  }
}
