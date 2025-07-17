'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend((lng, ns) =>
      import(`../public/locales/${lng}/${ns}.json`)
    )
  )
  .init({
    fallbackLng: 'en',
    defaultNS: 'common',
    supportedLngs: ['en', 'ru', 'kk'],
    react: { useSuspense: true },
  });

export default i18next;
