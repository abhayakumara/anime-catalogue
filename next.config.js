/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/anime-catalogue",
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
