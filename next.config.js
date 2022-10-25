/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,  
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['lumiere-a.akamaihd.net'],
  },
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "pt",
  },
}

module.exports = nextConfig
