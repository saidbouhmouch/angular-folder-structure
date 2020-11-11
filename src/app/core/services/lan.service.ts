import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';
import { LocalStorageService } from '../storage';
import { LocalizationService } from '../../shared/translations/localization.service';
import { locale, loadMessages } from 'devextreme/localization';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  languages = ['en', 'fr', 'nl', 'de', 'dk'];
  content = [
    {
      id: 1,
      name: 'Français',
      code: 'fr',
      src: '../../../content/images/flag/fr.svg'
    },
    {
      id: 2,
      name: 'English',
      code: 'en',
      src: '../../../content/images/flag/en.svg'
    },
    {
      id: 3,
      name: 'Nederlands',
      code: 'nl',
      src: '../../../content/images/flag/nl.svg'
    },
    {
      id: 4,
      name: 'Dansk',
      code: 'dk',
      src: '../../../content/images/flag/dk.svg'
    },
    {
      id: 4,
      name: 'Deutsch',
      code: 'de',
      src: '../../../content/images/flag/de.svg'
    }
  ];

  constructor(
    private localizationService: LocalizationService,
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

  setLocale() {
    loadMessages(this.localizationService.data);
    locale(this.getLang());
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
    this.setLocale();
    moment.locale(lang);
  }
}
