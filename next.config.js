/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { optimizeCss: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
