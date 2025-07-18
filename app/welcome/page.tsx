'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { languages } from '../../i18n/settings';

export default function WelcomePage() {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  // 👉 Лог значения subtitle
  console.log('subtitle:', t('subtitle'));

  const changeLanguage = (lng: string) => {
    const segments = pathname.split('/');
    segments[1] = lng;
    router.push(segments.join('/'));
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Видеофон */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/agro-drones.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>

      {/* Контент поверх видео */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-black/40 backdrop-blur-sm text-white text-center">
        <div className="absolute top-4 right-4 flex gap-2">
          {languages.map((lng) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              className="px-3 py-1 bg-white/20 hover:bg-white/40 rounded text-sm"
            >
              {lng.toUpperCase()}
            </button>
          ))}
        </div>

        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-lg mb-4">{t('description')}</p>
        <p className="mb-6">{t('subtitle')}</p>
        <Link
          href={`/${i18n.language}/register`}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          {t('cta')}
        </Link>
      </div>
    </main>
  );
}
