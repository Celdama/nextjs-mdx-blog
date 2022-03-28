/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['thepracticaldev.s3.amazonaws.com'],
  },
};

module.exports = nextConfig;
