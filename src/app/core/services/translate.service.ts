import { Injectable } from '@angular/core';
import { TranslateService as Translate } from '@ngx-translate/core';
import { LangService } from './lan.service';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  content: any;
  constructor(private translate: Translate, private langService: LangService) {
    this.translate.getTranslation(this.langService.getLang()).subscribe((resp: any) => {
      this.content = resp;
    });
  }

  get(key: string) {
    key = key.toLocaleLowerCase();
    return this.content[key];
  }
}
