import { VERSION, production, SERVER_API_URL , APPNAME } from 'src/app/app.constants';

export const environment = {
  appName : APPNAME,
  production: production,
  version: VERSION,
  serverUrl: '',
  envName: 'DEV',
  apiUrl: SERVER_API_URL + 'api/',
  timeout: 60000,
  language: 'fr',
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'fr']
};
