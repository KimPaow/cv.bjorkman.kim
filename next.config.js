/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    swcMinify: true,
    reactRemoveProperties: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
    loader: 'custom',
    deviceSizes: [640, 714, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 357, 384],
  }
}

module.exports = nextConfig
