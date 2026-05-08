import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/invitation",
      },
    ];
  },
};

export default nextConfig;
