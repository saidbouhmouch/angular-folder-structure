import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public state: BehaviorSubject<any> = new BehaviorSubject('');

  constructor() {
  }

  
  changeSubject(key: string, data: any) {
    this.state.next({ key, data });
  }
  
}
