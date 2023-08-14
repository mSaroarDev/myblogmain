/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "roar.media",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
