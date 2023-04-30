/** @type {import('next').NextConfig} */
const nextConfig = {
  skipTrailingSlashRedirect: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vistaartrade.com",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

module.exports = nextConfig;
