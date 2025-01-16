import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'build',
  exportPathMap: async function () {
    return {
      '/en': { page: '/[locale]', query: { locale: 'en' } },
      '/pt': { page: '/[locale]', query: { locale: 'pt' } },
    };
  },
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withNextIntl(nextConfig);
