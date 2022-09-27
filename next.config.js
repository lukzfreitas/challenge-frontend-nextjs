/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,  
  compiler: {
    styledComponents: true
  },
  images: {    
    domains: ['github.com', 'raw.githubusercontent.com'],
  },
}

module.exports = nextConfig
