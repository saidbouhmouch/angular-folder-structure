import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortHelp {
  constructor() {}

  formatSort(sortProperties: any[]): string {
    if (sortProperties !== undefined) {
      let sort = '';
      for (let i = 0; i < sortProperties.length; i++) {
        const sortProperty: any = sortProperties[i];
        sort += '&sort=' + sortProperty.selector + ',';
        sort += sortProperty.desc == false ? 'desc' : 'asc';
      }
      return sortProperties.length > 0 ? sort : '';
    }
    return '';
  }
}
