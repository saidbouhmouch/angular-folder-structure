import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  goToUrl(path , parms?){
    this.router.navigate(path,parms);
  }
  
}
