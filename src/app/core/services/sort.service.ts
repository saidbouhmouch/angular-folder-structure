import { Injectable } from '@angular/core';
import * as _ from 'lodash';

export interface Sort {
  resourceName: string;
  sorts: any[];
}

@Injectable({
  providedIn: 'root'
})
export class SortService {
  resource: any[] = [];

  constructor() {
    this.resource = [];
  }

  public getSort(resourceName: string): Sort {
    resourceName = resourceName.toUpperCase();
    let sort = _.find(this.resource, r => {
      return r.resourceName == resourceName;
    });
    if (sort === undefined) {
      sort = { resourceName, sorts: [] };
      this.setSort(resourceName, sort);
    }
    return sort;
  }

  public setSort(resourceName: string, obj: any) {
    resourceName = resourceName.toUpperCase();
    const index = _.findIndex(this.resource, r => {
      return r.resourceName == resourceName;
    });
    if (index !== -1) {
      this.resource[index] = obj;
    } else {
      this.resource.push(obj);
    }
  }
}
