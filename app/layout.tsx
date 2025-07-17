import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { I18nProvider } from '@/i18n/I18nProvider'; // путь уточни по проекту

export const metadata: Metadata = {
  title: 'Next.js + Postgres Auth Starter',
  description:
    'This is a Next.js starter kit that uses NextAuth.js for simple email + password login and a Postgres database to persist the data.',
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js + Postgres Auth Starter',
    description:
      'This is a Next.js starter kit that uses NextAuth.js for simple email + password login and a Postgres database to persist the data.',
  },
  metadataBase: new URL('https://nextjs-postgres-auth.vercel.app'),
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={params.lng} dir={dir(params.lng)}>
      <body className={GeistSans.variable}>
        <Suspense fallback={<div>Loading...</div>}>
          <I18nProvider>{children}</I18nProvider>
        </Suspense>
      </body>
    </html>
  );
}
