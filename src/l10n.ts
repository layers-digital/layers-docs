import pt from './assets/locales/pt/messages.json';

const MESSAGES_ALL = {
  'pt': pt,
};

export class DocsLocalization {
  private readonly locale: string;
  private readonly bundle: { [id: string]: string };

  constructor() {
    const prefix = /^\/docs\/([a-z]{2}\b)?/;
    const regexRes = prefix.exec(window.location.pathname);
    const language = regexRes ? regexRes[1] : null;
    this.locale = language && MESSAGES_ALL.hasOwnProperty(language) ? language : 'pt';
    this.bundle = MESSAGES_ALL[this.locale];
  }

  getLocale = () => this.locale;

  getString = (id: string) => this.bundle[id] || pt[id];
}

export const l10n = new DocsLocalization();
