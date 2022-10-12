/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,  
  compiler: {
    styledComponents: true
  },
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "pt",
  },
}

module.exports = nextConfig
