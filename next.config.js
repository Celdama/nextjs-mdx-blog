/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'imgs.search.brave.com',
      'd24f1whwu8r3u4.cloudfront.net',
      '3.bp.blogspot.com',
      'cdn.kastatic.org',
      'simpleprogrammer.com',
      'images.unsplash.com',
      'cdn-media-1.freecodecamp.org',
      '4.bp.blogspot.com',
    ],
  },
};

module.exports = nextConfig;
