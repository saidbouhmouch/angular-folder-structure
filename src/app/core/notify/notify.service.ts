import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  constructor(private alertService: ToastrService) {}

  success(title: any, msg: any): any {
    this.alertService.success(msg, title, {
      timeOut: 5000
    });
  }

  error(title: any, msg: any): any {
    this.alertService.error(msg, title, {
      timeOut: 5000
    });
  }

  warn(title: any, msg: any): any {
    this.alertService.warning(msg, title, {
      timeOut: 5000
    });
  }

  info(title: any, msg: any): any {
    this.alertService.info(msg, title, {
      timeOut: 5000
    });
  }
}
