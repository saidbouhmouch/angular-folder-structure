import { Injectable } from '@angular/core';
import * as _ from 'lodash';

export interface Paging {
  resourceName: string;
  count: number;
  page: number;
  size: number;
}

@Injectable({
  providedIn: 'root'
})
export class PagingService {
  resource: any[] = [];

  constructor() {}

  public getPaging(resourceName: string): Paging {
    resourceName = resourceName.toUpperCase();
    let paging = _.find(this.resource, function(r) {
      return r.resourceName == resourceName;
    });
    if (paging === undefined) {
      paging = { resourceName, count: 0, page: 0, size: 20 };
      this.setPaging(resourceName, paging);
    }
    return paging;
  }

  public setPaging(resourceName: string, obj: any) {
    resourceName = resourceName.toUpperCase();
    const index = _.findIndex(this.resource, function(r) {
      return r.resourceName == resourceName;
    });
    if (index !== -1) {
      this.resource[index] = obj;
    } else {
      this.resource.push(obj);
    }
  }

  public savePaging(resourceName, count) {
    const paging: any = this.getPaging(resourceName);
    paging.count = count;
    this.setPaging(resourceName, paging);
  }
}
