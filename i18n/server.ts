// i18n/server.ts

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from './settings';

const initI18next = async (
  lngInput: string | string[],
  nsInput: string | string[] = 'common'
) => {
  const lng = Array.isArray(lngInput) ? lngInput[0] : lngInput;
  const ns = Array.isArray(nsInput) ? nsInput[0] : nsInput;

  if (!i18next.isInitialized) {
    await i18next
      .use(initReactI18next)
      .use(
        resourcesToBackend((language: string, namespace: string) =>
          import(`../public/locales/${language}/${namespace}.json`)
        )
      )
      .init(getOptions(lng, ns));
  }

  return i18next;
};

export default initI18next;
