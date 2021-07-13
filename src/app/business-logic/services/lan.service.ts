import { Injectable } from '@angular/core';

import { LocalStorageService } from '../storage/localstorage.service';
import { TranslateService } from '@ngx-translate/core';

declare const  _ : any;
declare const  moment : any;

@Injectable({
  providedIn: 'root'
})
export class LangService {
  languages = ['en', 'fr', 'nl', 'de', 'dk'];

  constructor(
    private localStorageService: LocalStorageService,
    private translate: TranslateService
  ) {}

  getLang() {
    if (this.localStorageService.getItem('LANG')) {
      return this.localStorageService.getItem('LANG');
    } else {
      this.setLang(this.getBrowserLanguage());
      return this.ckeckLang(this.getBrowserLanguage());
    }
  }

  setLang(lang: any) {
    this.localStorageService.setItem('LANG', this.ckeckLang(lang));
    this.refrechTranslate();
  }
 

  getBrowserLanguage() {
    const lang = navigator.language;
    if (lang.includes('fr')) {
      return 'fr';
    } else if (lang.includes('en')) {
      return 'en';
    } else if (lang.includes('nl')) {
      return 'nl';
    } else if (lang.includes('dk')) {
      return 'dk';
    } else if (lang.includes('de')) {
      return 'de';
    } else {
      return 'fr';
    }
  }

  ckeckLang(lang: any) {
    return _.includes(this.languages, lang) ? lang : 'fr';
  }

  refrechTranslate() {
    const lang = this.getLang();
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    moment.locale(lang);
  }
}
