import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      },
    ],
  },
  // Static export for Vercel
  output: "export",
  distDir: "dist",
  // Handle trailing slashes
  trailingSlash: true,
};

export default nextConfig;
