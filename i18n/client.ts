'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from './settings'; // если ты используешь `getOptions`, подключи

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend((lng: string, ns: string) =>
      import(`../public/locales/${lng}/${ns}.json`)
    )
  )
  .init({
    ...getOptions(), // опционально: если хочешь централизованную конфигурацию
    fallbackLng: 'en',
    defaultNS: 'common',
    supportedLngs: ['en', 'ru', 'kk'],
    react: { useSuspense: true },
  });

export default i18next;
