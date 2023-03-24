/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress:true,
  swcMinify: true,
  experimental: { optimizeCss: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})




module.exports = withBundleAnalyzer(nextConfig)
