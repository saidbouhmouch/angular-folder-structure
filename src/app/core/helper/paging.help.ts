import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagingHelp {
  constructor() {}

  formatPagin(paging: any): string {
    if (paging !== undefined) {
      paging = '?page=' + paging.page + '&size=' + paging.size;
      return paging;
    }
    return '';
  }
}
