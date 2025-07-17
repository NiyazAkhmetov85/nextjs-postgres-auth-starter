'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from './settings';

// Инициализация i18next
i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend((lng: string, ns: string) =>
      import(`../public/locales/${lng}/${ns}.json`)
    )
  )
  .init({
    ...getOptions(), // централизованные настройки
    react: {
      useSuspense: true, // позволяет использовать <Suspense>
    },
  });

export default i18next;
