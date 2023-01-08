/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "themoviedb.org"],
  },
};

module.exports = nextConfig;
