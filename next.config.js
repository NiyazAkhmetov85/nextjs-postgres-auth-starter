const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  // При необходимости:
  // output: 'standalone', // для деплоя на свой сервер
};

module.exports = nextConfig;
