/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@mj/ui'],

  experimental: {
    scrollRestoration: true,
    serverActions: true,
  },
}
