/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponents: true,
  },
  analytics: {
    enabled: true,
  },
};

module.exports = nextConfig;
